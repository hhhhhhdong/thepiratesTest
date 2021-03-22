import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

function RollingBanner() {
  const [IsOpened, setIsOpened] = useState(false);
  const [RollingBannerData, setRollingBannerData] = useState([
    {
      label: '활모듬회(소)',
      price: '38,000원→30,000원',
      comment: '쿠폰 할인가',
      outLink: '',
      zoneLabel: '가락',
      permalink: '가락시장놀부수산',
      uri: '가락시장놀부수산',
    },
    {
      label: '활새우(대)',
      price: '25,000원/kg',
      comment: '전국최저가',
      outLink: '',
      zoneLabel: '인천',
      permalink: '인천종합연안부두어시장서림상회',
      uri: '인천종합연안부두어시장서림상회',
    },
  ]);

  const onClickBannerOpen = useCallback((e) => {
    e.preventDefault();
    setIsOpened((state) => !state);
    console.log('asdf');
  }, []);
  return (
    <S.Container IsOpened={IsOpened} RollingBannerLength={RollingBannerData.length}>
      <S.BannerWrap IsOpened={IsOpened} RollingBannerLength={RollingBannerData.length}>
        {RollingBannerData.map((item) => (
          <li key={item.label}>
            <p>{item.label}</p>
            <p>{item.price}</p>
            <p>({item.comment})</p>
          </li>
        ))}
      </S.BannerWrap>
      <span onClick={onClickBannerOpen}>
        <img src="/images/arrows-down.svg" alt="화살표" />
      </span>
    </S.Container>
  );
}

export default RollingBanner;

const S = {};
S.BannerWrap = styled.ul`
  ${(props) =>
    //롤링 배너의 개수에따라 자동으로 애니매이션을 구현
    props.RollingBannerLength &&
    css`
      animation: slide ${props.RollingBannerLength * 2}s infinite;
      @keyframes slide {
        0% {
          margin-top: 0;
        }
        ${Array(props.RollingBannerLength)
          .fill()
          .map(
            (_, i) => `${(100 / (props.RollingBannerLength + 1)) * (i + 1)}% {
            margin-top: -${i * 40}px;
          }`
          )}
        100% {
          margin-top: 0;
        }
      }
    `}

  li {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    cursor: pointer;
    p {
      padding: 0 3px;
    }
  }
  ${(props) =>
    props.IsOpened &&
    css`
      animation: none;
    `}
`;

S.Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 40px;
  background-color: #1c79bc;

  span {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    img {
      padding: 5px;
      width: 30px;
      transition: all 0.3s ease-in-out;
    }
  }

  ${(props) =>
    props.IsOpened &&
    css`
      height: ${props.RollingBannerLength * 40}px;
      span {
        img {
          -ms-transform: rotate(-180deg);
          -webkit-transform: rotate(-180deg);
          transform: rotate(-180deg);
        }
      }
    `}
`;
