/* eslint-disable no-bitwise */
const path = require('path');
const fs = require('fs');

const NAMES = require('./names.json');
const PROGRAMMING_LANGUAGES = require('./programming-languages.json');

const generateRandomNumbers = ({ maxSize = 7, maxValue = 19 } = {}) => {
	return [
		...new Set(
			new Array((Math.random() * maxSize) | 0)
				.fill(0)
				.map(_ => (Math.random() * maxValue) | 0)
		),
	];
};

const generateRandomProgrammingLanguages = () => {
	const randomNumbers = generateRandomNumbers();
	return randomNumbers.map(randomNumber => {
		return {
			id: randomNumber + 1,
			language: PROGRAMMING_LANGUAGES[randomNumber],
		};
	});
};

const getDbPath = () => {
	return path.join(__dirname, '..', 'db', 'nerds.json');
};

const generateDb = () => {
	const personDb = NAMES.map((person, ind) => {
		const randomLanguages = generateRandomProgrammingLanguages();
		return {
			id: ind + 1,
			name: person,
			languages: randomLanguages.length ? randomLanguages : null,
		};
	});
	const dbPath = getDbPath();

	fs.writeFile(dbPath, JSON.stringify(personDb, null, '\t'), err => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(`Successfully generated the db at ${dbPath}\n`);
	});
};

generateDb();
