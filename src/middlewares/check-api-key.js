/**
 * Confirms the API_KEY.
 *
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} next
 */
const checkApiKey = (req, res, next) => {
	let error;

	if (process.env.NODE_ENV === 'production') {
		let apiKey;
		if (req.method === 'GET') {
			apiKey = req.query.apiKey;
		} else if (req.method === 'POST') {
			apiKey = req.body.apiKey;
		}

		if (!apiKey) apiKey = req.headers.api_key;

		if (!apiKey) {
			error = new Error('Api Key is required.');
		} else if (!process.env.API_KEYS.split(',').includes(apiKey)) {
			error = new Error('Incorrect Api Key provided.');
		}
	}

	next(error);
};

module.exports = checkApiKey;
