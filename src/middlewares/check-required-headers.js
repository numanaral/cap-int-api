/**
 * Makes sure to prevent URL/browser access.
 *
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} next
 */
const checkRequiredHeaders = (req, res, next) => {
	let error;

	if (process.env.NODE_ENV === 'production') {
		const hasRequiredHeaders = ['origin', 'x-requested-with'].some(
			headerName => Object.hasOwnProperty.call(req.headers, headerName)
		);
		if (!hasRequiredHeaders) {
			error = new Error(
				"You don't have the required headers to make a request."
			);
		}
	}

	next(error);
};

module.exports = checkRequiredHeaders;
