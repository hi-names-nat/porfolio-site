import Container from 'react-bootstrap/Container';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown, NavLink} from "react-bootstrap";
import './Topbar.css';


export default function Topbar() {
    return (
        <Navbar variant='dark' sticky={"top"} style={{backgroundColor: '#2c282c'}}>
            <NavLink className={'name-divider'} href={"/"} >
                <Navbar.Brand className={'name-title'}>Natalie Soltis</Navbar.Brand>
                <p className={'name-subtitle'}>Game Designer & Programmer</p>
            </NavLink>
                <Nav>
                    <NavDropdown title={"Projects"}>
                        <NavDropdown.Item href={"/Bobcat"}>Bobcat Project</NavDropdown.Item>
                        <NavDropdown.Item href={"/NSCM"}>Netscape Cybermind</NavDropdown.Item>
                        <NavDropdown.Item href={"/SASG"}>Steady As She Goes</NavDropdown.Item>
                        <NavDropdown.Item href={"/Dreamrunner"}>Dreamrunner</NavDropdown.Item>
                        <NavDropdown.Item href={"/Adoorable"}>Adoorable Hotel</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href={"/About"}>About Me</Nav.Link>
                </Nav>
        </Navbar>
    )
}