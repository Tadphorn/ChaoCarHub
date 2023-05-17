const express = require('express');
const pool = require('../config.js')
const { isLoggedIn } = require('../middlewares')
const Joi = require('joi')

router = express.Router();

router.get("/userpayment", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM payment')
    return res.json(rows)
  } catch (err) {
    return res.status(500).json(err)
  }

});

// const paySchema = Joi.object({
//   pay_cr_name: Joi.string().required().email(),
//   pay_cr_num: Joi.string().required().pattern(/0[0-9]{9}/),
//   pay_cr_exp: Joi.string().required().max(150),
//   pay_cr_cvc: Joi.string().required().max(150),
//   u_pass: Joi.string().required().min(6),
//   confirm_password: Joi.string().required().valid(Joi.ref('password')),
//   u_username: Joi.string().required(),
// })

router.post("/userpayment", isLoggedIn, async function (req, res, next) {
  // try {
  //   await paySchema.validateAsync(req.body, { abortEarly: false })
  // } catch (err) {
  //   return res.status(400).send(err)
  // }
  console.log(req.user.u_id)
  const { pay_cr_name, pay_cr_num, pay_cr_exp, pay_cr_cvc, r_id} = req.body
  console.log('pay', pay_cr_name, pay_cr_num, pay_cr_exp, pay_cr_cvc, r_id)
  const conn = await pool.getConnection();
  await conn.beginTransaction();

  try {
    const results = await conn.query(
      `INSERT INTO payment(pay_cr_name, pay_cr_num, pay_cr_exp, pay_cr_cvc, pay_status, r_id, u_id, pay_time) 
        VALUES( ?, ?, ?, ?, 'รอตรวจสอบ', ?, ?, CURRENT_TIMESTAMP)`,
      [pay_cr_name, pay_cr_num, pay_cr_exp,  pay_cr_cvc, r_id, req.user.u_id]
    );


    await conn.commit();
    return res.json({ message: "success" });
  } catch (err) {
    await conn.rollback();
    return res.status(400).json(err);
  } finally {
    conn.release();
  }
});

exports.router = router;