/**
 * Generates a random number.
 *
 * @param {number} min Min value (inclusive).
 * @param {number} max Max value (inclusive).
 * @returns Random number.
 */
const generateRandomNumber = (min, max) => {
	return Math.round(Math.random() * (max - min)) + min;
};

module.exports = generateRandomNumber;
