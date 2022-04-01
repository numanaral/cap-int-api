const NERDS_DB = require('../../db/nerds.json');
const { DEFAULT_PAGINATION_CONFIG } = require('./constants');

/**
 * Gets a paginated result.
 *
 * @template T
 * @param {Array<T>} arr Array to paginate.
 * @param {PaginationConfig} paginationConfig Pagination config.
 * @returns {PaginatedResponse<T>}
 */
const paginate = (arr, paginationConfig) => {
	const { page, itemsPerPage } = {
		...DEFAULT_PAGINATION_CONFIG,
		...paginationConfig,
	};
	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;

	const totalCount = arr.length;
	const data = arr.slice(start, end);

	return {
		totalCount,
		data,
	};
};

/**
 * Gets books.
 *
 * @param {ListRequest} req List request.
 */
const listBooks = req => {
	return paginate(NERDS_DB, req);
};
/**
 * Searches books.
 *
 * @param {SearchRequest} req Search request.
 */
const searchBooks = ({ keyword, ...rest }) => {
	const _keyword = keyword.toLowerCase();
	const filteredDb = NERDS_DB.filter(({ name }) => {
		return name.toLowerCase().includes(_keyword);
	})
		// We are doing this just so that the candidate has to normalize the
		// different endpoint responses using map.
		.map(({ languages, name, ...dataRest }) => {
			return {
				...dataRest,
				fullName: name,
				languageCombination: languages
					? languages
							.map(({ language }) => {
								return language;
							})
							.join('|')
					: null,
			};
		});

	return paginate(filteredDb, rest);
};

module.exports = {
	listBooks,
	searchBooks,
};
