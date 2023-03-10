import 'react-calendar-heatmap/dist/styles.css'

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import GlobalStyles from './styles/GlobalStyles';
import Profile from './pages/Profile/Profile';
import Repositories from './pages/Repositories/Repositories';
import Header from './components/Header/Header';



export function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/:username' element={<Profile />} />
                <Route path='/:username/:reponame' element={<Repositories />} />
            </Routes>
            <GlobalStyles />
        </BrowserRouter>
    )
}