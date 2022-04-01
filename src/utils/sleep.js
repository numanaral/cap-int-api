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

module.exports = sleep;
