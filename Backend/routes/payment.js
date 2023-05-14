const express = require('express');
const pool = require('../config.js')

router = express.Router();  

router.get("/userpayment", async function (req, res, next) {
  try {
      const [rows, fields] = await pool.query('SELECT * FROM payment')
      return res.json(rows)
  } catch (err) {
      return res.status(500).json(err)
    }
  
});

router.post("/userpayment", async function (req, res, next) { 
      const {pay_cr_name, pay_cr_num, pay_cr_exp, pay_cr_cvc, pay_status} = req.body
      console.log('pay',pay_cr_name, pay_cr_num, pay_cr_exp, pay_status, pay_cr_cvc)
      const conn = await pool.getConnection();
      await conn.beginTransaction();
  
      try {
          const results = await conn.query(
            "INSERT INTO payment(`pay_cr_name`, `pay_cr_num`, `pay_cr_exp`, `pay_cr_cvc`, `pay_status`, `pay_time`) VALUES(?, ?, ?, ?, ?, CURRENT_TIMESTAMP)",
            [pay_cr_name, pay_cr_num, pay_cr_exp, pay_cr_cvc, pay_status]
          );
  
            await conn.commit();
            return res.json({message: "success"});
          } catch (err) {
            await conn.rollback();
            return res.status(400).json(err);
          } finally {
            conn.release();
          }
        });

exports.router = router;