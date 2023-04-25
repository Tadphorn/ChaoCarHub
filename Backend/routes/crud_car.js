const express = require('express');
const path = require("path");
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

//   add car 
router.post("/car", upload.single("myImageCar"), async function (req, res, next) {
    const file = req.file;

    if (!file) {
    return res.status(400).json({ message: "Please upload a file" });
  }

  const { car_code, car_brand, car_model, car_seat, car_bag, car_rentprice} = req.body
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  console.log("filepath", file)
  try {
    const results = await conn.query(
      "INSERT INTO car(`car_code`, `car_brand`, `car_model`, `car_seat`, `car_bag`, `car_rentprice`, `car_img`) VALUES(?, ?, ?, ?, ?, ?, ?)",
      [car_code, car_brand, car_model, car_seat, car_bag, car_rentprice, file.path.substr(6)]
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

router.post("/test", upload.single("myImageCar"), async function (req, res, next) {
  const file = req.file;
  
})

exports.router = router;