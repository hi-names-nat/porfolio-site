import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from "./Components/Topbar/Topbar";
import About from "./Pages/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Topbar />
        <About />
    </div>
  );
}

export default App;
