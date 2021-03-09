import React from 'react';

import { UserForm } from './Components/Login/userLogin';
import { RepForm } from './Components/Login/representativeLogin';
import { InputForm } from "./Components/Contact/InputForm";

import UserRegister from "./Components/Registration/UserRegister";
import RepresenativeRegister from "./Components/Registration/RepresentativeRegister";


import logo from './logo.svg';
import './App.css';
import './Components/Navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Navigator from './Components/Navbar/PageNavigator'
import Home from './Components/Pages/Home';

const App = () => {
  return (

    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Navigator/>
        <Footer />
       </BrowserRouter>
       
      {/* <UserRegister />   
      <RepresenativeRegister /> 

       <UserForm />
       <RepForm />
       <InputForm /> */}

    </div>

  );
}

export default App;
