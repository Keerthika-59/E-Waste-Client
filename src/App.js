import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import './components/Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Navigator from './components/Navbar/PageNavigator'
import Home from './components/Pages/Home';

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Navigator/>
        <Footer />
       </BrowserRouter>
       </div>
  );
}

export default App;
