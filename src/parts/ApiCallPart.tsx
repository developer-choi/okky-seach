import React from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {exampleParse} from '../utils/search-example';
import {apiGetExamplePath} from '../api/example';

export default function ApiCallPart() {

  const {search} = useLocation();

  return (
      <Wrap>
        <b>현재 페이지 Api Call경로</b> : {apiGetExamplePath(exampleParse(search))}
      </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 20px;
`;
