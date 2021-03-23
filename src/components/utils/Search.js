import { useState } from 'react';
import styled from 'styled-components';

function Search() {
  const [Text, setText] = useState('');

  const onChangeText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <S.Container>
      <div>
        <input onChange={onChangeText} value={Text} placeholder="검색어를 입력하세요." type="text" />
        <button>검색</button>
      </div>
    </S.Container>
  );
}

export default Search;

const S = {};

S.Container = styled.div`
  padding: 8px 10px;
  background-color: #fff;
  div {
    background-color: #eee;
    display: flex;
    border-radius: 3px;
  }
  input {
    font-size: 13px;
    background: none;
    padding: 0.8em 0.5em;
    width: 100%;
    height: 34px;
    border: none;
    border-radius: 0;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  button {
    width: 50px;
    background: transparent;
    color: #999 !important;
    padding: 7px 10px;
    flex: 1 0 auto;
    border: 0;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
  }
`;
