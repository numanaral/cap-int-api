const Errors = {
	RequiredQuery: 'keyword is a required argument.',
};

/**
 * @type {PaginationConfig}
 */
const DEFAULT_PAGINATION_CONFIG = {
	page: 1,
	itemsPerPage: 10,
};

module.exports = { Errors, DEFAULT_PAGINATION_CONFIG };
