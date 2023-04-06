const express = require('express');
const pool = require('../config.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;
router = express.Router();


  router.post("/register", async function  (req, res, next) {
    const {cus_fname, cus_lname, cus_username, cus_pass, cus_phone, cus_email} = req.body
    bcrypt.hash(cus_pass, saltRounds, async function(err, hash){
        try {
            console.log(hash);
            console.log(cus_pass);
            const [rows1, fields1] = await pool.query('select cus_username from customer where cus_username = ?',
            [cus_username])
            // console.log(rows1.length);
            if(rows1.length == 0){
                
                const [rows, fields] = await pool.query('INSERT INTO customer(cus_fname, cus_lname, cus_username, cus_pass, cus_phone, cus_email) VALUES(?,?,?,?,?,?)',
                [cus_fname, cus_lname, cus_username, hash, cus_phone, cus_email])
                return res.json(rows)
            }
            else{
                return res.json({status: "Username use pai laew"})
            }
        } catch (err) {
            console.log(err);
            next(err)
            
        }
    })
});


router.post('/login', async (req,res,next) =>{
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
  


exports.router = router;