const findData = require('../dbs/find-from-db');

const express = require('express');

const router = express.Router();

router.get('/hello', (req, res)=> {
  findData((result) => {
    res.json(result[0].hello)
  })
});

module.exports = router;
