import { useState } from 'react';
import styled from 'styled-components';

import Layout from '../containers/Layout';
import Filter from '../utils/Filter';
import { storeData } from '../data/demo_data';

function Market() {
  const [Data, setData] = useState(storeData);
  return (
    <Layout>
      <Filter Data={Data} setData={setData} />
      {Data.map((v) => (
        <S.StoreCardWrap>
          <div>
            <img src={v.thumbnail} alt={v.label} />
          </div>
          <S.StoreInfo>
            <S.StoreInfoTop>
              <div>
                <span>{v.label}</span>
                <em>{v.market}</em>
              </div>
              <h4>{v.description}</h4>
            </S.StoreInfoTop>
            <S.StoreInfoBottom>
              <p>
                <span>{v.summary.rating}</span>
                <em>{v.summary.comments}</em>
              </p>
              <div>{v.state}</div>
            </S.StoreInfoBottom>
          </S.StoreInfo>
        </S.StoreCardWrap>
      ))}
    </Layout>
  );
}

export default Market;

const S = {};

S.StoreInfo = styled.div`
  padding: 15px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
S.StoreInfoTop = styled.div`
  span {
    font-size: 14px;
    color: #555555;
    font-weight: 500;
    letter-spacing: -0.7px;
  }
  em {
    font-size: 13px;
    color: #777777;
    font-weight: 400;
    letter-spacing: -0.65px;
    margin-left: 5px;
  }
  h4 {
    margin-top: 1px;
    font-size: 13px;
    color: #999999;
    font-weight: 500;
    letter-spacing: -0.65px;

    width: 260px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
S.StoreInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 14px;
    color: #555555;
    font-weight: 400;
    letter-spacing: -0.7px;

    span {
      color: #ff9300;
      font-size: 13px;
      letter-spacing: -0.65px;
    }
    span:before {
      content: '★ ';
    }
    em {
      margin-left: 10px;
      font-size: 13px;
      color: #999999;
      letter-spacing: -0.65px;
    }
  }
`;

S.StoreCardWrap = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 130px;
  margin: 5px 0;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  img {
    display: block;
    height: 130px;
  }
`;
