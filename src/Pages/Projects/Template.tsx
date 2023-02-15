import {Image, Row, Col, Carousel, Button} from "react-bootstrap";
import React from "react";
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import "./Template.css"

export default function ProjectTemplate() {
    return (
        <Container>
            <Container  className={"header-div"}>
                <h1 className={"header"}>Title</h1>
            </Container>
            <Container className={"info-div"}>
                <Container>
                    <p className={"paragraph"}>
                        Netscape cybermind is a blah blah blah blah blah blah blah
                    </p>
                </Container>
                <Container>
                    <Carousel style={{flex: 1, display: 'flex'}}>
                        <Carousel.Item>
                            <ReactPlayer className={"player"} url={require("../../Assets/netscape.mp4")} muted loop playing width={'30vw'} height={'30vh'}/>
                        </ Carousel.Item>
                        <Carousel.Item>
                            <Image />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </Container>
            <Container style={{flex: 1, display: 'flex', alignSelf: 'center', justifySelf: 'center', justifyContent: 'space-evenly', }}>
                <Button className={"button"}/>
                <Button className={"button"}/>
            </Container>
        </Container>
    );
}