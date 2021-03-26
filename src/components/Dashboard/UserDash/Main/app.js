import React from 'react';
import './app.css';
import Navbar from '../UserSidebar';
import Navigator from '../UserNavigator';
import { BrowserRouter} from 'react-router-dom';
import Footer from '../../../Footer/Footer';
import Navbar1 from '../../../Navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1/>
        <Navbar/>
        <Navigator/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
