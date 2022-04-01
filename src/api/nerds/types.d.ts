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

interface PeepsListItemLanguage {
  id: number;
  language: string;
}

interface PeepsListItem {
  id: number;
	name: string;
	languages: Array<PeepsListItemLanguage> | null;
}

// We are doing this just so that the candidate has to normalize the different
// endpoint responses using map.
interface PeepsSearchData {
  id
	fullName: string;
	languageCombination: string | null;
}

interface PeepsListResponse extends PaginatedResponse<PeepsListItem> {}
interface PeepsSearchResponse extends PaginatedResponse<PeepsSearchData> {}
