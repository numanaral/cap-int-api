const checkApiKey = require('./check-api-key');
const checkRequiredHeaders = require('./check-required-headers');
const handleCors = require('./handle-cors');
const handleErrors = require('./handle-errors');
const handleNotFound = require('./handle-not-found');

module.exports = {
	checkApiKey,
	checkRequiredHeaders,
	handleCors,
	handleErrors,
	handleNotFound,
};
