import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import './Components/Navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Navigator from './Components/Navbar/PageNavigator'
import Home from './Components/Pages/Home'

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
