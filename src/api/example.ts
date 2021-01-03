import {ExampleSearchOrderbyType} from '../utils/search-example';
import {stringifyWithoutUndefined} from '../utils/search-core';

export function apiGetExamplePath({orderby, searchType, searchText, direction}: Partial<ExampleSearchOrderbyType>) {
  return '/user?' + stringifyWithoutUndefined({o: orderby, d: direction, t: searchType, x: searchText});
}
