import React from "react";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ProjectTemplate from "../Pages/Projects/Template";
import SASG from "../Pages/Projects/SASG";
import Bobcat from "../Pages/Projects/Bobcat";
import Dreamrunner from "../Pages/Projects/Dreamrunner";
import Adoorable from "../Pages/Projects/Adoorable";
import About from "../Pages/About/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Portfolio/>} />
                <Route path={"/Portfolio"} element={<Portfolio/>} />
                <Route path={"/NSCM"} element={<ProjectTemplate/>}/>
                <Route path={"/Bobcat"} element={<Bobcat/>}/>
                <Route path={"/Dreamrunner"} element={<Dreamrunner/>}/>
                <Route path={"/Adoorable"} element={<Adoorable/>}/>
                <Route path={"/SASG"} element={<SASG/>}/>
                <Route path={"/About"} element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}