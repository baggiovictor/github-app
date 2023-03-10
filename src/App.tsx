import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header/Header';



export function App() {
    return (
        <BrowserRouter>
            <Header />

            <GlobalStyles />
        </BrowserRouter>
    )
}