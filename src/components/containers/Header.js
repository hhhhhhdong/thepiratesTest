import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Header() {
  const history = useHistory();
  const [ActivedItem, setActivedItem] = useState('홈');
  const navItem = ['홈', '시장', '쇼핑', '콘텐츠', '시세', '도매', '후기', '문의'];

  useEffect(() => {
    const curPage = history.location.pathname.split('/')[1];
    curPage && setActivedItem(curPage);
  }, [history]);

  const onClickNavItem = (e) => {
    e.preventDefault();
    setActivedItem(e.target.innerText);
    history.push(`/${e.target.innerText}`);
  };
  return (
    <S.Container>
      <S.Header>
        <h2>인어교주해적단</h2>
        <p>로그인/가입</p>
      </S.Header>
      <S.GNB>
        {navItem.map((v) => (
          <S.NavItem key={v} ActivedItem={ActivedItem} itemName={v} onClick={onClickNavItem}>
            {v}
          </S.NavItem>
        ))}
      </S.GNB>
    </S.Container>
  );
}
export default Header;

const S = {};

S.Container = styled.div``;
S.GNB = styled.ul`
  font-size: 14px;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
`;
S.NavItem = styled.li`
  ${(prop) =>
    prop.ActivedItem === prop.itemName &&
    css`
      color: #1c79bc;
    `}
  cursor: pointer;
  padding: 5px 10px;
`;

S.Header = styled.div`
  padding: 0 14px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    cursor: pointer;
    color: dodgerblue;
    font-size: 18px;
  }
  p {
    cursor: pointer;
    font-size: 12px;
    color: gray;
  }
`;
