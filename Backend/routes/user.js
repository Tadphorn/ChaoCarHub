const express = require("express")
const pool = require("../config")
const bcrypt = require('bcrypt');


// const { generateToken } = require("../utlis/token");

router = express.Router();

router.post('/user/signup', async (req, res, next) => {
    
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    
    const {u_fname, u_lname, u_username, u_pass, u_phone, u_email} = req.body
    // console.log(u_fname, u_lname, u_username, u_pass, u_phone, u_email)
    //เข้ารหัส u_pass
    bcrypt.hash(u_pass, 10, async function(err, hash){
    try {
        const [rows1, fields1] = await conn.query('select u_username from user where u_username = ?',
        [u_username])
        
        if(rows1.length == 0){
            await conn.query(
                'INSERT INTO user(u_username, u_fname, u_lname, u_pass, u_phone, u_email) VALUES (?, ?, ?, ?, ?, ?)',
                [u_username, u_fname, u_lname, u_pass, u_phone, u_email]
            )
        }
        else{
            return res.json({check: false})
        }
        conn.commit()
        res.status(201).send()
    } catch (err) {
        conn.rollback()
        res.status(400).json(err.toString());
    } finally {
        conn.release()
    }
})
})

router.post('/user/signup', async (req,res,next) =>{
    const {username, password} = req.body
    try {
        const [rows, fields] = await pool.query('SELECT * FROM customer WHERE cus_username = ?',
        [username])
        if(rows.length == 0){
            return res.json({status: "error", message: "user not found"})
    
        }else {
            bcrypt.compare(password, rows[0].cus_pass, function(err,isLogin){
                if(isLogin){
                    res.json({status:'ok', customer: rows[0]})
                }
                else{
                    res.json({status: 'Invalid Password', err: err})
                }
            })
        }  
    } catch (error) {
        console.log(error);
        next(error)
    }

    
 })

exports.router = router
