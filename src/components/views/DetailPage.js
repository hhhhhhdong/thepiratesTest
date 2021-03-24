import styled from 'styled-components';

const DetailPage = () => {
  return (
    <S.Container>
      <S.Header>
        <h4>
          <img src="/images/arrows-down.svg" alt="화살표" />
          <span>청정수산 강서농수산물시장</span>
        </h4>
        <div>11.2 만</div>
      </S.Header>
      <S.ImgWrap>
        <span>오늘시세</span>
      </S.ImgWrap>
      <S.Info>
        <ul>
          <li>
            <span>▾</span>
            <p>서울특별시 강서구 외발산동 424 강서수산물도매시장 1층 B-55호</p>
          </li>
          <li>
            <span>▾</span>
            <div>
              <p>수요일 (오늘) : 08:00 ~ 20:30</p>
              <p>목요일 (내일) : 08:00 ~ 20:30</p>
              <p>금요일 (모레) : 08:00 ~ 20:30</p>
              <p>더 보기 ▾</p>
            </div>
          </li>
          <li>
            <span>▾</span>
            <p>
              <em>010-8774-9211</em>
              <em>02-2667-0539</em>
            </p>
          </li>
          <li>
            <span>▾</span>
            <div>
              <h5>
                <p>퀵서비스</p>
                <p>(10,000 ~ 20,000원 선)</p>
              </h5>
              <h5>
                <p>고속버스 화물</p>
                <p>(사장님께 문의하세요!)</p>
              </h5>
              <h5>
                <p>택배</p>
                <p>(5,000원 내외)</p>
              </h5>
            </div>
          </li>
        </ul>
      </S.Info>
      <S.TapMenu>
        <div>
          <ul>
            <li>가격 정보</li>
            <li>탐방기</li>
            <li>리뷰 184</li>
            <li>위치</li>
          </ul>
        </div>
        <div></div>
      </S.TapMenu>
    </S.Container>
  );
};

export default DetailPage;
const S = {};

S.TapMenu = styled.div`
  height: 800px;
  div {
    padding: 10px 0;
    background-color: #eeeeee;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    li {
      border-right: 1px solid #dddddd;
      flex: 1;
      padding: 10px;
      text-align: center;
    }
    color: #777777;
    font-size: 14px;
  }
  li:nth-child(2) {
    color: #1c79bc;
    background-color: #ffffff;
  }
`;

S.Info = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.7px;
  background-color: #1c79bc;
  padding: 15px;
  li {
    display: flex;
    align-items: flex-start;
    padding: 5px 0;
  }
  span {
    padding: 0px 15px 0 10px;
  }
  p {
    padding: 0 0 5px 0;
  }
  h5 {
    font-size: 14px;
    display: flex;
    font-weight: 400;
    p:first-child {
      width: 100px;
    }
  }
  em {
    display: inline-block;
    width: 105px;
    text-align: center;
    height: 30px;
    padding: 5px 10px;
    margin-right: 5px;
    background-color: #fff;
    border-radius: 3px;
    color: #1c79bc;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.7px;
    font-weight: 500;
    cursor: pointer;
  }
`;

S.ImgWrap = styled.div`
  margin-top: 50px;
  height: 190px;
  background-color: #777777;
  position: relative;
  span {
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding: 2px 5px;
    border-radius: 3px;
    cursor: pointer;
    background-color: #1c79bc;
    color: #fff;
    font-size: 12px;
    letter-spacing: -0.6px;
    line-height: 18px;
    text-align: center;
  }
`;

S.Container = styled.div`
  margin: 0 auto;
  width: 420px;
  background-color: #eeeeee;
`;
S.Header = styled.div`
  z-index: 10;
  position: fixed;
  width: 420px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #fff;
  h4 {
    display: flex;
  }
  img {
    width: 50px;
    padding: 10px;
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  span {
    letter-spacing: -0.8px;
    line-height: 50px;
    color: #555555;
    font-size: 16px;
    font-weight: 500;
  }
  div {
    padding: 0 15px;
    color: #999;
    font-size: 14px;
    letter-spacing: -0.65px;
  }
`;
