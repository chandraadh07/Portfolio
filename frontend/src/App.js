import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import './App.scss';
// import resume from '../components/resume.js'

function App() {
  return (
    <div className="App">
    <div className="tabs">
      <button>Home</button>
      <button>Resume</button>
    </div>
      <Router path="/">
        <div className="Home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="profile pic" width = "700px" height="500px"/>
          <p> Hi, this is me Chandra A</p>
        </div>
      </Router>
    </div> 
  );
}

export default App;
//changes 