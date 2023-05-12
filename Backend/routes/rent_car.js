const express = require('express');
const pool = require('../config.js')


router = express.Router();

//search car
router.post("/search", async function (req, res, next) {
    const {brand, price, seat} = req.body
    console.log(brand, price, seat)
    const arrprice = price.split("-")
    const minprice = parseInt(arrprice[0])
    const maxprice = parseInt(arrprice[1])
    // console.log(arrprice[0], arrprice[1])
    try {
      if(brand == 'All'){
        const [rows1, fields1] = await pool.query('SELECT * FROM car where car_rentprice between ? and ? and car_seat = ?',
        [minprice, maxprice, seat])
        return res.json(rows1)
      }else {
        const [rows, fields] = await pool.query('SELECT * FROM car WHERE car_brand=? and car_rentprice between ? and ? and car_seat = ?',
        [brand, minprice, maxprice, seat])
        return res.json(rows)
      }
      
    } catch (err) {
      return res.status(500).json(err)
    }
  
  });

//detail car
router.get("/detailcar/:carId", async function (req, res, next) {
    console.log(req.params.carId)
    try {
  
      const [rows, fields] = await pool.query("SELECT * FROM car where car_id = ?",
        [req.params.carId]);
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      return next(err);
    }
   });


router.post("/rent", async function (req, res, next) {
    const {timePickup, dayPickup, timeReturn, dayReturn, placePickup, placeReturn, amountDays, carId, userId} = req.body
    console.log(timePickup, dayPickup, timeReturn, dayReturn, placePickup, placeReturn, amountDays)
    try {
  
      const [rows, fields] = await pool.query("INSERT INTO rental(r_time_pickup, r_day_pickup, r_time_return, r_day_return, r_place_pickup, r_place_return, r_amountdays, r_status, car_id, u_id, r_timestamp) " +
      "VALUE(?, ?, ?, ?, ?, ?, ?, 'รอชำระเงิน', ?, ?, CURRENT_TIMESTAMP) ",
        [timePickup, dayPickup, timeReturn, dayReturn, placePickup, placeReturn, amountDays, carId, userId]);
      return res.json(rows);
  
    } catch (err) {
      console.log(err)
      res.json({message: "can't find car Id"})
      return next(err);
    }
    });


    router.delete("/rent/:id", async function (req, res, next) {
      try {
    
        const [rows, fields] = await pool.query("DELETE FROM rental WHERE r_id = ?", [req.params.id])
        return res.json({message: `Delete car Id ${req.params.id}`});
    
      } catch (err) {
        console.log(err)
        res.json({message: "can't find rent Id"})
        return next(err);
      }
      });

exports.router = router;