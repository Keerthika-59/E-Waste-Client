import React,{useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Navigator from './components/Navbar/PageNavigator'
import Home from './components/Pages/Home';
import AuthApi from './authAPI'
const App = () => {
  const [auth,setAuth]=useState(false)
  return (

    <div className="App">
      <AuthApi.Provider value={{auth,setAuth}}>
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        {/* <Route path='/UserDash' exact component={UserDashboard } /> */}
        <Navigator/>
        <Footer />
       </BrowserRouter>
      </AuthApi.Provider>
      
       </div>

  );
}

export default App;