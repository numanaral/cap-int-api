interface PaginationConfig {
	page: number;
	itemsPerPage: number;
}

interface RequestBase extends PaginationConfig, ParsedQs {}

interface ListRequest extends RequestBase {}

interface SearchRequest extends RequestBase {
	keyword: string;
}

interface PaginatedResponse<T> {
	totalCount: number;
	data: Array<T>;
}

interface PeepsListItem {
	id: number;
	name: string;
	languages: Array<string> | null;
}

// We are doing this just so that the candidate has to normalize the different
// endpoint responses using map.
interface PeepsSearchData {
	id;
	fullName: string;
	languageCombination: string | null;
}

interface PeepsListResponse extends PaginatedResponse<PeepsListItem> {}
interface PeepsSearchResponse extends PaginatedResponse<PeepsSearchData> {}
