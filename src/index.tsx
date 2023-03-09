import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>po <Outlet /></div>}>
          <Route path='' element={<div>{<Home />}</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);