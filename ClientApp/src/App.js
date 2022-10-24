import React, { Component } from 'react';
import Register from './components/Register';
import SignUp from './components/SignUp';
import './custom.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes'


export default class App extends Component {

  render() {
    return (
      <div className='App'>
      
      <Navbar/>
      <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </div>
    );
  }
}
