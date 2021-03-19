import React from 'react';
import './App.css';
import Navbar from './components/Dashboard/UserDash/UserSidebar';
import Navigator from './components/Dashboard/UserDash/UserNavigator';
import { BrowserRouter as Router} from 'react-router-dom';

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