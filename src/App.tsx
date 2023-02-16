import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from "./Components/Topbar/Topbar";
import About from "./Pages/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from "./Pages/Portfolio/Portfolio";
import ProjectTemplate from "./Pages/Projects/Template";
import SASG from "./Pages/Projects/SASG";
import {match} from "assert";

enum currentPage {
    portfolio,
    netscape,
    bobcat,
    sasg,
    gl,
    adoorable,
    about,
}

function App() {

    let [page, getCurrentPage] = useState(currentPage.portfolio);
  return (
    <div className="App">
      <Topbar />
       <Portfolio/>
    </div>
  );
}

export default App;
