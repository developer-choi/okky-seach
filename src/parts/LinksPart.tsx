import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {apiGetExamplePath} from '../api/example';
import {exampleParse} from '../utils/search-example';

export default function LinksPart() {

  return (
      <div>
        <h2>링크 예시</h2>
        <GridWrap>
          <b>사이트경로</b>
          <b>특징</b>
          <b>호출 API 경로</b>
          {links.map(({comment, search}, index) => (
              <Fragment key={index}>
                <Link to={'/' + search}>/{search}</Link>
                <span>{comment}</span>
                <span>{apiGetExamplePath(exampleParse(search))}</span>
              </Fragment>
          ))}
        </GridWrap>
      </div>
  );
}

const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 600px 250px 600px;
  grid-gap: 10px 20px;
  margin-top: 10px;
`;

const links = [
  {search: '?searchType=name&searchText=kim', comment: '검색정상'},
  {search: '?searchType=name&searchText=kim&unknownKey=value', comment: '없는 key 존재'},
  {search: '?searchType=nme&searchText=kim', comment: 'name대신 nme'},
  {search: '?searchype=name&searchText=kim', comment: 'searchType오타'},
  {search: '?searchText=kim', comment: 'searchType 없음'},
  {search: '?orderby=last-login-date&direction=asc', comment: '정렬정상'},
  {search: '?orderby=last-login-date&direction=abc', comment: 'asc대신 abc'},
  {search: '?orderby=last-login-date&direction=abc&searchype=name&searchText=kim', comment: 'asc대신 abc, searchType오타'},
  {search: '?orderby=last-login-date&direction=asc&searchType=name&searchText=kim', comment: '검색, 정렬 정상'},
];
