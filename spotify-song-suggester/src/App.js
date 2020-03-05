import React from "react";
import './App.css'
// import Login from "./components/Login";
// import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";


import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import SuggestedSongs from './components/SuggestedSongs'


// import Search from "./components/Search";
// import TestSearch from './components/TestSearch';
// import TestResultCard from './components/TestResultCard'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <SignUp /> */}
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/suggested-songs" component={SuggestedSongs} />
          {/* <PrivateRoute exact path="/editfavorites/:id" component={EditFavorites} /> */}
          <Route path="/login" component={SignIn} />
          <Route path="/" component={SignUp} />

        </Switch>
      </div>
    </Router>



  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SongList  from './components/SongList';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//       <SongList />
//     </div>
//   );
// }

// export default App;
