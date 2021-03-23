import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { zoneData, itemData } from '../data/demo_data';

function Filter(props) {
  const [OpenLocation, setOpenLocation] = useState(false);
  const [OpenItem, setOpenItem] = useState(false);

  const onClickLocationBtn = (e) => {
    e.preventDefault();
    setOpenItem(false);
    setOpenLocation((state) => !state);
  };
  const onClickItemBtn = (e) => {
    e.preventDefault();
    setOpenLocation(false);
    setOpenItem((state) => !state);
  };

  const onClickLocation = (e) => {
    e.preventDefault();
    console.log(zoneData[e.target.dataset.index]);
  };
  const onClickItem = (e) => {
    e.preventDefault();
    console.log(itemData[e.target.dataset.index]);
  };

  return (
    <>
      <S.Container>
        <S.Filter onClick={onClickLocationBtn}>
          <p>
            모든 지역 <span>▾</span>
          </p>
        </S.Filter>
        <S.Filter onClick={onClickItemBtn}>
          <p>
            모든 품목 <span>▾</span>
          </p>
        </S.Filter>
        <S.Filter>
          <p>
            기본 순 <span>▾</span>
          </p>
        </S.Filter>
      </S.Container>
      {OpenLocation && (
        <S.FilterItem onClick={onClickLocation}>
          {zoneData.map((v, i) => (
            <li key={v.label} data-index={i}>
              {v.label}
            </li>
          ))}
        </S.FilterItem>
      )}
      {OpenItem && (
        <S.FilterItem onClick={onClickItem}>
          {itemData.map((v, i) => (
            <li key={v.label} data-index={i}>
              {v.label}
            </li>
          ))}
        </S.FilterItem>
      )}
    </>
  );
}
export default Filter;

const S = {};

S.FilterItem = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 140px;
    border-bottom: 0.5px solid gray;
    border-right: 0.5px solid gray;
  }
`;

S.Filter = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 0.5px solid gray;
  p {
    text-align: center;
    line-height: 40px;
    width: 100%;
    height: 100%;
  }
  ul {
    border: 1px solid red;
  }
`;

S.Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #1c79bc;
  font-weight: 500;
  span {
    padding-left: 5px;
  }
`;
