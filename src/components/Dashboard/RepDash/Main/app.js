import React from 'react';
import './app.css';
import Navbar from '../UserSidebar';
import Navigator from '../UserNavigator';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navigator/>
      </BrowserRouter>
    </>
  );
}

export default App;