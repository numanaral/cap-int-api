const express = require('express');

const randomRoute = require('./random');

const router = express.Router();
router.use('/random', randomRoute);

module.exports = router;
