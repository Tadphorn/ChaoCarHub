const express = require('express');
const pool = require('../config.js')


router = express.Router();

router.post('/car', async function(req, res, next){
    const {car_id, car_img, car_name, car_brand, car_model, car_seat, car_bag, car_rentprice} = req.body
    try{
        const [rows, fields] = await pool.query("INSERT INTO car (`car_id`, `car_img`, `car_name`, `car_brand`, `car_model`, `car_seat`, `car_bag`, `car_rentprice`) value(?, ?, ?, ?, ?, ?, ?, ?)", 
        [car_id, car_img, car_name, car_brand, car_model, car_seat, car_bag, car_rentprice]);
        // return json ของรายการ blogs
        return res.json({"message":`A new car is added`});
        // return res.json({"message":`A new comment is added (ID: ${rows.insertID})`});
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

  
  router.get("/", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM car')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

exports.router = router;