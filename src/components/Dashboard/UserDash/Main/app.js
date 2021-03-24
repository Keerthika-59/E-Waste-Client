import React from 'react';
import './app.css';
import Navbar from '../UserSidebar';
import Navigator from '../UserNavigator';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../Navbar/Navbar'

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
