const express = require('express');

const randomRoute = require('./random');
const nerdsRoute = require('./nerds');

const router = express.Router();
router.use('/random', randomRoute);
router.use('/nerds', nerdsRoute);

module.exports = router;
