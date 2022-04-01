const { generateRandomNumber, sleep } = require('../utils');

const Flag = {
	Error: 1,
	Delay: 2,
	Pass: 3,
};

const RANDOM_ERROR = 'Random error from the server.';

/**
 * Creates random delay or error.
 *
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} next
 */
const triggerRandomDelayOrError = async (req, res, next) => {
	let error;
	const randomNumber = generateRandomNumber(1, 3);

	if (randomNumber === Flag.Error) error = new Error(RANDOM_ERROR);
	else if (randomNumber === Flag.Delay) await sleep(2000);

	next(error);
};

module.exports = triggerRandomDelayOrError;
