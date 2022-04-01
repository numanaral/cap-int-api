const express = require('express');
const { Errors } = require('./constants');
const { listBooks, searchBooks } = require('./utils');

const router = express.Router();

router.get('/list', (req, res) => {
	/** @type {ListRequest} */
	// @ts-ignore
	const reqArgs = req.query;
	const booksResponse = listBooks(reqArgs);

	res.json(booksResponse);
});

router.get('/search', (req, res) => {
	/** @type {SearchRequest} */
	// @ts-ignore
	const reqArgs = req.query;

	if (!reqArgs.keyword) throw new Error(Errors.RequiredQuery);

	const booksResponse = searchBooks(reqArgs);

	res.json(booksResponse);
});

module.exports = router;
