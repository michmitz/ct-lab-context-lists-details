import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ColorModeContainer from './ColorMode/ColorModeContainer'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ColorModeContainer} />
      </Switch>
    </Router>
  );
}
