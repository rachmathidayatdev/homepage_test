import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './routes/Public';
import './App.css';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={ HomePage }/>
      </Switch>
    </Router>
  )
}

export default App;
