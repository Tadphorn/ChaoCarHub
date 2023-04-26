const express = require("express")
const pool = require("../config")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utlis/token");
const { isLoggedIn } = require('../middlewares')

router = express.Router();

// // test isLoggedIn
 router.get('/user/me', isLoggedIn, async (req, res, next) => {
         // req.user ถูก save ข้อมูล user จาก database ใน middleware function "isLoggedIn"
         console.log(req.user)
         res.json(req.user)
     })

router.post('/user/signup', async (req, res, next) => {

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const { u_fname, u_lname, u_username, u_pass, u_phone, u_email } = req.body
    // console.log(u_fname, u_lname, u_username, u_pass, u_phone, u_email)
    //เข้ารหัส u_pass
    bcrypt.hash(u_pass, 10, async function (err, hash) {
        try {
            console.log(hash)
            const [rows1, fields1] = await conn.query('select u_username from user where u_username = ?',
                [u_username])

            if (rows1.length == 0) {
                await conn.query(
                    'INSERT INTO user(u_username, u_fname, u_lname, u_pass, u_phone, u_email) VALUES (?, ?, ?, ?, ?, ?)',
                    [u_username, u_fname, u_lname, hash, u_phone, u_email]
                )
            }
            else {
                return res.json({ check: false })
            }
            res.status(201).send()
            conn.commit()
            
        } catch (err) {
            conn.rollback()
            res.status(400).json(err.toString());
        } finally {
            conn.release()
        }
    })
})


router.post('/user/signin', async (req, res, next) => {
    const { username, password } = req.body
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {
        const [rows, fields] = await conn.query('SELECT * FROM user WHERE u_username = ?',
            [username])
        if (rows.length == 0) {
            // return res.json({ status: "error", message: "user not found" })
            throw new Error('Incorrect username or password')
        }
        if(!(await bcrypt.compare(password, rows[0].u_pass))) {
            throw new Error('Incorrect username or password')
        }
        console.log(rows[0].u_id)

        // Check if token already existed
        const [tokens] = await conn.query(
            'SELECT * FROM tokens WHERE u_id=?',
            [rows[0].u_id]
        )
        let token = tokens[0]?.token
        if (!token) {
            // Generate and save token into database
            token = generateToken()
            await conn.query(
                'INSERT INTO tokens(u_id, token) VALUES (?, ?)',
                [rows[0].u_id, token]
            )
        }
        conn.commit()
        res.status(200).json({'token': token })
    } catch (error) {
        conn.rollback()
        console.log(error);
        next(error)
    }


})

exports.router = router
