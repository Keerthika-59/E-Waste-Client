import React from 'react';
import Navbar from '../Navbar/Navbar';
import Navigator from '../Navbar/PageNavigator'
import Home from '../Pages/Home';
import Footer from '../Footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import { InputForm } from '../Contact/InputForm'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>

    );
}

export default LandingPage;