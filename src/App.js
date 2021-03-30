import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import {useGlobalContext} from './context';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
