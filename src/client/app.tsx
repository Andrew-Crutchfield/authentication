import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import PersonalPage from './components/PersonalPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/main" component={MainPage} />
        <PrivateRoute path="/personal">
          <PersonalPage />
        </PrivateRoute>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;