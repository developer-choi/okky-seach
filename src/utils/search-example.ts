import {
  direction,
  getIncludesParseValidator,
  groupKey,
  OrderbyData,
  rootSafeParse,
  SEARCH_ORDERBY_GROUP_KEYS,
  SearchData,
  searchText
} from './search-core';

export type ExampleSearchType = 'name' | 'email';
const EXAMPLE_SEARCH_TYPES: ExampleSearchType[] = ['name', 'email'];

export type ExampleOrderbyType = 'last-login-date' | 'signup-date';
const EXAMPLE_ORDERBY_TYPES: ExampleOrderbyType[] = ['signup-date', 'last-login-date'];

export type ExampleSearchOrderbyType = SearchData<ExampleSearchType> & OrderbyData<ExampleOrderbyType>;

export function exampleParse(search: string): Partial<ExampleSearchOrderbyType> {
  const parseData = rootSafeParse(search, {
    direction,
    searchText,
    searchType: getIncludesParseValidator(EXAMPLE_SEARCH_TYPES),
    orderby: getIncludesParseValidator(EXAMPLE_ORDERBY_TYPES)
  }) as Partial<ExampleSearchOrderbyType>;
  return groupKey(parseData, SEARCH_ORDERBY_GROUP_KEYS);
}
