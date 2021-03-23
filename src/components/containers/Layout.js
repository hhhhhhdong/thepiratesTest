import styled from 'styled-components';

import Header from './Header';
import RollingBanner from './RollingBanner';

function Layout(props) {
  return (
    <S.Container>
      <Header />
      <RollingBanner />
      <S.Children>{props.children}</S.Children>
    </S.Container>
  );
}
export default Layout;

const S = {};

S.Container = styled.div`
  background-color: #f1f2f3;
  margin: 0 auto;
  width: 420px;
`;
S.Children = styled.div`
  background-color: #eee;
`;
