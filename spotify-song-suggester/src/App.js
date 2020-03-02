import React from 'react';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>

        <Route path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
