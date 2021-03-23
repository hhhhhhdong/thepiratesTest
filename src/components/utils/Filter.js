import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { zoneData, itemData, storeData } from '../data/demo_data';

function Filter({ setData, Data }) {
  const locationRef = useRef();
  const itemRef = useRef();
  const locationBtnRef = useRef();
  const itemBtnRef = useRef();
  const sortBtnRef = useRef();
  const [OpenLocation, setOpenLocation] = useState(false);
  const [OpenItem, setOpenItem] = useState(false);
  const [SelectedLocation, setSelectedLocation] = useState(null);
  const [SelectedItem, setSelectedItem] = useState(null);

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

  useEffect(() => {
    itemBtnRef.current.style.backgroundColor = '#fff';
    sortBtnRef.current.style.backgroundColor = '#fff';
    locationBtnRef.current.style.backgroundColor = '#fff';
    itemBtnRef.current.style.color = '#1c79bc';
    sortBtnRef.current.style.color = '#1c79bc';
    locationBtnRef.current.style.color = '#1c79bc';
    if (OpenLocation) {
      itemBtnRef.current.style.backgroundColor = '#eee';
      sortBtnRef.current.style.backgroundColor = '#eee';
      itemBtnRef.current.style.color = '#777777';
      sortBtnRef.current.style.color = '#777777';
    }
    if (OpenItem) {
      locationBtnRef.current.style.backgroundColor = '#eee';
      sortBtnRef.current.style.backgroundColor = '#eee';
      locationBtnRef.current.style.color = '#777777';
      sortBtnRef.current.style.color = '#777777';
    }
  }, [OpenLocation, OpenItem]);

  const onClickLocation = (e) => {
    if (!(e.target.tagName === 'LI')) return;
    e.preventDefault();
    const selectedData = zoneData[e.target.dataset.index].locations;
    let result;
    if (SelectedItem) {
      //지역 필터와 품종필터를 중복으로 하기위한 로직
      const data = getFilteredItemData(SelectedItem, storeData);
      result = getFilteredLocationData(selectedData, data);
    } else {
      result = getFilteredLocationData(selectedData, storeData);
    }

    setSelectedLocation(selectedData);
    locationRef.current.innerText = e.target.innerText;
    setOpenLocation(false);

    setData(result);
  };
  const getFilteredLocationData = (locations, baseData) => {
    const filteredData = [];
    for (let location of locations) {
      for (let store of baseData) {
        if (location.label === store.market) {
          filteredData.push(store);
        }
      }
    }
    return filteredData;
  };

  const onClickItem = (e) => {
    if (!(e.target.tagName === 'LI')) return;
    e.preventDefault();
    const selectedData = itemData[e.target.dataset.index].label.split(',');
    let result;

    if (selectedData[0] === '모든품목') {
      if (!SelectedItem) return;
      if (SelectedLocation) {
        result = getFilteredLocationData(SelectedLocation, storeData);
      } else {
        result = storeData;
      }
      setSelectedItem(null);
    } else {
      if (SelectedLocation) {
        //지역 필터와 품종필터를 중복으로 하기위한 로직
        const data = getFilteredLocationData(SelectedLocation, storeData);
        result = getFilteredItemData(selectedData, data);
      } else {
        result = getFilteredItemData(selectedData, storeData);
      }
      setSelectedItem(selectedData);
    }

    itemRef.current.innerText = e.target.innerText;
    setOpenItem(false);

    setData(result);
  };
  const getFilteredItemData = (items, baseData) => {
    const filteredData = [];
    for (let item of items) {
      for (let store of baseData) {
        if (!(store.description.indexOf(item) === -1)) {
          filteredData.push(store);
        }
      }
    }
    return filteredData;
  };

  return (
    <>
      <S.Container>
        <S.Filter ref={locationBtnRef} onClick={onClickLocationBtn}>
          <div>
            <em ref={locationRef}>모든 지역</em>
            <span>▾</span>
          </div>
        </S.Filter>
        <S.Filter ref={itemBtnRef} onClick={onClickItemBtn}>
          <div>
            <em ref={itemRef}>모든 품목</em>
            <span>▾</span>
          </div>
        </S.Filter>
        <S.Filter ref={sortBtnRef} OpenLocation={OpenLocation}>
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
  background-color: #fff;
  font-size: 13px;
  font-weight: 400;
  color: #777777;
  li {
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 140px;
    border-bottom: 0.5px solid #ddd;
    border-right: 0.5px solid #ddd;
  }
`;

S.Filter = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
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
