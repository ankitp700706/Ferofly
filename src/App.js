import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Iconbar from './components/Iconbar';
import Floatingbutton from './components/Floatingbutton';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Iconbar/>
        <Floatingbutton/>
        <LandingPage/>
      </Router>
    </div>
  );
}

export default App;
