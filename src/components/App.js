import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/Home';
import Market from './views/Market';
import Shopping from './views/Shopping';
import Contents from './views/Contents';
import Price from './views/Price';
import Wholesale from './views/Wholesale';
import Review from './views/Review';
import Customer from './views/Customer';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/홈" component={Main} />
          <Route exact path="/시장" component={Market} />
          <Route exact path="/쇼핑" component={Shopping} />
          <Route exact path="/콘텐츠" component={Contents} />
          <Route exact path="/시세" component={Price} />
          <Route exact path="/도매" component={Wholesale} />
          <Route exact path="/후기" component={Review} />
          <Route exact path="/문의" component={Customer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  body {
    height:100%;
    background-color: #333333;
  }

  a {
    color: black;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }
  
  `;
