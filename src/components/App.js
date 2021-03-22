import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/main';
import Login from './views/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
