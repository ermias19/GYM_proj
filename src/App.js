import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import UserBody from './components/UserBody'


function App() {

  return (

    <Router>
      <Switch>

        <Route exact
          path="/"
          component={() => <HomePage />} />

        <Route
          exact
          path="/status/"
          component={() => <UserBody />}
        />

        <Route
          exact
          path="/profile/"
          component={() => <UserBody />}
        />

        <Route
          exact
          path="/plan/"
          component={() => <UserBody />}
        />

        <Route
          exact
          path="/diet/"
          component={() => <UserBody />}
        />

      </Switch>
    </Router>

  );
}

export default App;
