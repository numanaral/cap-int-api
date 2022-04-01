const checkApiKey = require('./check-api-key');
const checkRequiredHeaders = require('./check-required-headers');
const handleCors = require('./handle-cors');
const handleErrors = require('./handle-errors');
const handleNotFound = require('./handle-not-found');
const triggerRandomDelayOrError = require('./trigger-random-delay-or-error');

module.exports = {
	checkApiKey,
	checkRequiredHeaders,
	handleCors,
	handleErrors,
	handleNotFound,
	triggerRandomDelayOrError,
};
