const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling get request from Temperature',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Handling post request from Temperature',
  });
});

module.exports = router;
