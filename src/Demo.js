import React from 'react';
import logo from 'logo.svg';
import 'App.css';
import {
  createForm,
  Button,
} from 'components/antd';

function Demo(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={()=> {props.history.push({
          pathname: '/',
          state: 'phuoc test'
        });}} > Chuyen trang 123 </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default createForm({name: 'Demo', component: Demo});
