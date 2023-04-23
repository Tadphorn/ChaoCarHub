const express = require('express');
const pool = require('../config.js')
const multer = require("multer");

router = express.Router();

// SET STORAGE 
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./static/uploads");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

// select Car
router.get("/car", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM car')
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
      }
    
  });

  const upload = multer({ storage: storage });
  // upload.array("myImageCar", 5),


//   add car 
router.post("/car", async function (req, res, next) {
  //   const file = req.files;
  //   let pathArray = [];
 
  //   if (!file) {
  //   return res.status(400).json({ message: "Please upload a file" });
  // }

    const {car_code, car_brand, car_model, car_seat, car_bag, car_rentprice} = req.body
    console.log('car_code1',car_code, car_brand, car_model, car_seat, car_bag, car_rentprice)
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const results = await conn.query(
          "INSERT INTO car(`car_code`, `car_brand`, `car_model`, `car_seat`, `car_bag`, `car_rentprice`) VALUES(?, ?, ?, ?, ?, ?)",
          [car_code, car_brand, car_model, car_seat, car_bag, car_rentprice]
        );
        
        // const carId = results[0].insertId;

        // req.files.forEach((file, index) => {
        //     let path = [carId, file.path.substring(6), index == 0 ? 1 : 0];
        //     pathArray.push(path);
        //   });

        // await conn.query(
        //     "INSERT INTO car(car_img) VALUES ?;",
        //     [pathArray]
        //   );

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