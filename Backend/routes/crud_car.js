const express = require('express');
const pool = require('../config.js')

router = express.Router();

// select Car
router.get("/car", async function (req, res, next) {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM car')
        return res.json(rows)
    } catch (err) {
        return res.status(500).json(err)
      }
    
  });
  
exports.router = router;