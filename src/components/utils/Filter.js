import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { zoneData, itemData, storeData } from '../data/demo_data';

function Filter({ setData, Data }) {
  const locationRef = useRef();
  const itemRef = useRef();
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
    const filteredData = [];
    const selectedData = zoneData[e.target.dataset.index];
    for (let location of selectedData.locations) {
      for (let store of storeData) {
        if (location.label === store.market) {
          filteredData.push(store);
        }
      }
    }
    locationRef.current.innerText = e.target.innerText;
    setOpenLocation(false);
    setData(filteredData);
  };
  const onClickItem = (e) => {
    if (!(e.target.tagName === 'LI')) return;
    e.preventDefault();
    const selectedData = itemData[e.target.dataset.index].label.split(',');
    const filteredData = [];
    for (let item of selectedData) {
      for (let store of storeData) {
        if (!(store.description.indexOf(item) === -1)) {
          filteredData.push(store);
        }
      }
    }
    itemRef.current.innerText = e.target.innerText;
    setOpenItem(false);
    setData(filteredData);
  };

  return (
    <>
      <S.Container>
        <S.Filter onClick={onClickLocationBtn}>
          <div>
            <em ref={locationRef}>모든 지역</em>
            <span>▾</span>
          </div>
        </S.Filter>
        <S.Filter onClick={onClickItemBtn}>
          <div>
            <em ref={itemRef}>모든 품목</em>
            <span>▾</span>
          </div>
        </S.Filter>
        <S.Filter>
          <div>
            <em>기본 순</em>
            <span>▾</span>
          </div>
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
  border-right: 0.5px solid gray;
  div {
    text-align: center;
  }
  em {
    line-height: 40px;
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
