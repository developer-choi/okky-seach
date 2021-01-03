import React from 'react';
import styled from 'styled-components';
import LinksPart from './parts/LinksPart';
import ApiCallPart from './parts/ApiCallPart';
import SearchFormPart from './parts/SearchFormPart';

export default function App() {

  return (
      <Wrap>
        <ApiCallPart/>
        <LinksPart/>
        <SearchFormPart/>
      </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 100px;
`;
