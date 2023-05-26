import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Users';
import Rate from './RateJobs'
import Jobs from './Jobs';
import KrijoVP from './KrijoVP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ < Login /> } />
      <Route path='/app' element={ < App /> } />
      <Route path='/users' element={ < User /> } />
      <Route path='/rate' element={ < Rate />} />
      <Route path='/jobs' element= { < Jobs />} />
      <Route path='/krijo' element= { < KrijoVP />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

