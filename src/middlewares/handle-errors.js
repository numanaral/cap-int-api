/**
 * Handles errors.
 *
 * @param {Error} err
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} _next
 */
const handleErrors = (err, req, res, _next) => {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	res.status(statusCode);
	const response = {
		error: true,
		message: err.message,
		...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
	};

	res.json(response);
};

module.exports = handleErrors;
