const { generateRandomNumber, sleep } = require('../utils');

const Flag = {
	Error: 1,
	Delay: 2,
	Pass: 3,
};

const RANDOM_ERROR = 'Random error from the server.';

const DEFAULT_DELAY = 2000;

/**
 * Creates random delay or error.
 *
 * @param {ExpressRequest} req
 * @param {ExpressResponse} res
 * @param {ExpressNextFunction} next
 */
const triggerRandomDelayOrError = async (req, res, next) => {
	let error;
	const { randomDelay, randomError } = req.query;
	if (randomDelay || randomError) {
		const randomNumber = generateRandomNumber(1, 3);

		if (randomError && randomNumber === Flag.Error) {
			error = new Error(RANDOM_ERROR);
		} else if (randomDelay && randomNumber === Flag.Delay) {
			const delay =
				parseInt(/** @type {string} */ (randomDelay), 10) ||
				DEFAULT_DELAY;
			await sleep(delay);
		}
	}

	next(error);
};

module.exports = triggerRandomDelayOrError;
