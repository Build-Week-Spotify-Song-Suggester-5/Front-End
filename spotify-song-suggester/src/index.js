import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import logger from "redux-logger";

import rootReducer from "./reducers/index"
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

console.log(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux'
// import { rootReducer } from './reducers';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'

// import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))

// ReactDOM.render(
// <Provider store={store} >
// <App />

// </Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
