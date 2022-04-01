const { DEFAULT_RANDOM_CONFIG, Errors } = require('./constants');

/**
 * Generates a random number.
 *
 * @param {RandomConfig} config Random configuration.
 * @returns Random number.
 */
const generateRandomNumber = config => {
	const { min: _min, max: _max } = {
		...DEFAULT_RANDOM_CONFIG,
		...config,
	};
	const min = parseInt(`${_min}`, 10);
	const max = parseInt(`${_max}`, 10);
	return Math.round(Math.random() * (max - min)) + min;
};

/**
 * Sleeps for the given amount.
 *
 * @param {number} ms Sleep duration in milliseconds.
 * @returns The sleep promise.
 */
const sleep = (ms = 1000) => {
	return new Promise(r => {
		setTimeout(r, ms);
	});
};

/**
 * Generates a random response with random errors.
 *
 * @param {PossibleParams} params Params from get or post.
 * @returns {RandomResponse}
 */
const generateRandomResponse = params => {
	const randomNumber = generateRandomNumber(
		/** @type {RandomRequest} */ (params)
	);

	if (randomNumber % 2 === 0) {
		throw new Error(Errors.EvenNumber);
	}

	return {
		random: randomNumber,
	};
};

module.exports = {
	generateRandomNumber,
	sleep,
	generateRandomResponse,
};
