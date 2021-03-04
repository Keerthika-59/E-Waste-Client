// import logo from './logo.svg';
import './App.css';
import './components/Navbar.css'
import AboutUs from './components/Pages/AboutUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { BrowserRouter, Route } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
          {/* <Route path='/Gallery' component={Gallery} /> */}
          <Route path='/AboutUs' component={AboutUs} />
          {/* <Route path='/ContactUs' component={ContactUs} /> */}
          {/* <Route path='/SignUp' component={SignUp} /> */}
          </Switch>
        </div>
        <div style={{marginTop:"15%"}}>
        <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
