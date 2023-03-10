import 'react-calendar-heatmap/dist/styles.css'

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import GlobalStyles from './styles/GlobalStyles';
import Profile from './pages/Profile/Profile';
import Repository from './pages/Repository/Repository';
import Header from './components/Header/Header';



export function App() {
    return (
        <BrowserRouter>
            <Header />
            <h1></h1>
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/:username' element={<Profile />} />
                <Route path='/:username/:reponame' element={<Repository />} />
            </Routes>

            {/* <Footer /> */}
            <GlobalStyles />
        </BrowserRouter>
    )
}