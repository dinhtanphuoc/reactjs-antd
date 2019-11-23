import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Routes } from './routes';
import { BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
  console.log(222222222);
ReactDOM.render(
  <BrowserRouter history={customHistory}>
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
