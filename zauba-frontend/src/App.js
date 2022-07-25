import React, { Component } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import MainPage from './components/pages/mainPage';
import './App.css';
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};
export default class App extends Component {
  render() {
    return (

      <div className="mt-20 ml-40 w-80">
         <Provider template={AlertTemplate} {...options}>
        <MainPage />
        </Provider>
    </div>
    );
  }
}

