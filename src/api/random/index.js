const express = require('express');

const { sleep, generateRandomResponse } = require('./utils');

const router = express.Router();

router.get('/', (req, res) => {
	const randomResponse = generateRandomResponse(req.query);

	res.json(randomResponse);
});

router.get('/:min/:max', (req, res) => {
	const randomResponse = generateRandomResponse(req.params);

	res.json(randomResponse);
});

router.post('/async', async (req, res, next) => {
	try {
		const randomResponse = generateRandomResponse(req.body);

		await sleep();
		res.json(randomResponse);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
