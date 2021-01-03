import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import FormExtend from '../components/FormExtend';
import {useHistory, useLocation} from 'react-router-dom';
import {exampleParse, ExampleSearchType} from '../utils/search-example';
import {stringifyWithoutUndefined} from '../utils/search-core';

export default function SearchFormPart() {

  const {search} = useLocation();
  const {push} = useHistory();
  const {searchText, searchType, direction, orderby} = useRef(exampleParse(search)).current;
  const [text, setText] = useState(searchText ?? '');
  const [type, setType] = useState<ExampleSearchType>(searchType ?? 'name');

  const onChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  const onChangeType = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as ExampleSearchType);
  }, []);

  const onSubmit = useCallback(() => {
    push('?' + stringifyWithoutUndefined({searchType: type, searchText: text, direction: direction, orderby: orderby}));
  }, [push, text, type, direction, orderby]);

  return (
      <Wrap>
        <h2>검색폼 테스트</h2>
        <Form onSubmit={onSubmit}>
          <Select value={type} onChange={onChangeType}>
            <option value="name">이름</option>
            <option value="email">이메일</option>
          </Select>
          <Input value={text} onChange={onChangeText} placeholder="검색어 입력"/>
          <Button>검색</Button>
        </Form>
      </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 20px;
`;

const Form = styled(FormExtend)`
  display: inline-flex;
  border: 2px solid lightcoral;
  align-self: flex-start;
  margin-top: 10px;
  
  > * {
    outline-offset: -5px; 
  }
`;

const Input = styled.input`
  padding: 5px 10px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: lightcoral;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 5px;
`;
