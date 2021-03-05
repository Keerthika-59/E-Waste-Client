// import logo from './logo.svg';
import './App.css';
import './components/Navbar.css'
import AboutUs from './components/Pages/AboutUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { BrowserRouter, Route } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Navbar from './components/Navbar';
import Data from './components/dummydata'
import Navigator from './components/PageNavigator'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Navigator/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
