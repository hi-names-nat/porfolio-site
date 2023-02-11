import Container from 'react-bootstrap/Container';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import './Topbar.css';


export default function Topbar() {
    return (
        <Navbar bg='dark' variant='dark' sticky={"top"}>
            <div className={'name-divider'}>
                <Navbar.Brand>Natalie Soltis</Navbar.Brand>
                <p className={'name-subtitle'}>Game Designer & Programmer</p>
            </div>
                <Nav>
                    <Nav.Link>Games Portfolio</Nav.Link>
                    <Nav.Link>About Me</Nav.Link>
                </Nav>
        </Navbar>
    )
}