const express = require('express');
const pool = require('../config.js')

router = express.Router();

// Add Car
router.post('/', async function(req, res, next){
    const {car_img, car_name, car_brand, car_model, car_seat, car_bag, car_rentprice} = req.body
    try{
        const [rows, fields] = await pool.query("INSERT INTO car (`car_img`, `car_name`, `car_brand`, `car_model`, `car_seat`, `car_bag`, `car_rentprice`) value(?, ?, ?, ?, ?, ?, ?)", 
        [car_img,  car_name, car_brand, car_model, car_seat, car_bag, car_rentprice]);
        return res.json({"message":`A new car is added`});
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

// Select Car
  router.get("/", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM car')
        return res.json(rows)
    } catch (error) {
        console.log(err);
        next(err)
    }
    
  });

  // Delete Car
router.delete('/', async function(req, res, next){
  const {id} = req.body
  try{
      const [rows, fields] = await pool.query(
          'DELETE FROM car WHERE car_id = ?',[id]
      );
      console.log(rows);
      return res.json({
          "message": `Car ID ${id} is delete.`,
      });
  }catch(err){
      console.log(err)
      return next(err);
  }
});
exports.router = router;