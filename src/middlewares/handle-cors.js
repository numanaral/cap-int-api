const cors = require('cors');

const handleCors = (...args) => {
	return cors({
		credentials: true,
		// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
		origin: (origin, callback) => {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) return callback(null, true);
			if (process.env.NODE_ENV !== 'production') {
				return callback(null, true);
			}
			if (process.env.ALLOWED_ORIGINS.split(',').indexOf(origin) === -1) {
				const msg =
					'The CORS policy for this site does not ' +
					'allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
		// @ts-ignore
	})(...args);
};

module.exports = handleCors;
