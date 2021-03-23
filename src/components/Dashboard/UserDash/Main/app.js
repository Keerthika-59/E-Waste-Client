import React from 'react';
import './app.css';
import Navbar from '../UserSidebar';
import Navigator from '../UserNavigator';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
=======
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/Navbar'
>>>>>>> fae4d1ae2bdd31d8cbc5e9c0ac3511ce5ddf6451

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Navbar />
        <Navigator/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
