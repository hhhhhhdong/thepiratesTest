import styled from 'styled-components';

import Header from './Header';
import RollingBanner from './RollingBanner';

function Layout(props) {
  return (
    <S.Container>
      <Header />
      <RollingBanner />
      <div>{props.children}</div>
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
