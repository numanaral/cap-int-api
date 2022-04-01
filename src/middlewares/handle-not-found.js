/**
 * Handles not found.
 *
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} next
 */
const handleNotFound = (req, res, next) => {
	res.status(404);
	const error = new Error(`404 Not Found: ${req.originalUrl}`);

	next(error);
};

module.exports = handleNotFound;
