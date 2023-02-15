import {Image, Row, Col, Carousel, ButtonGroup} from "react-bootstrap";
import React from "react";
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player";
import "./Template.css"


const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function SASG() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Steady AS She Goes</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                        I made this project independently as part of Ludum Dare 52 compo, an event in which participants
                        are challenged to create a fully-fledged game in 48 hours, solo. It is a Star Trek-inspired
                        game in which you play as a engineer to a captain who is asking too much of you. It was developed
                        in unity as my 'send off' game to the engine, as I have since began to focus much more on
                        Unreal Engine.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", width: '80%', display: 'inline-block'}}>
                        <li>
                            All Design and implimentation of systems in C#, including resource management and
                            visual-oriented sequences.
                        </li>
                        <li>
                            Creation of all used 3D models.
                        </li>
                        <li>
                            Entire game finished within a 48-hour period.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                                <ReactPlayer url={require("../../Assets/SASG/sasg_1.png")}
                                             width={'100%'} height={'100%'} className={"player"}
                                             muted loop playing/>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <ReactPlayer url={require("../../Assets/SASG/sasg_2.png")}
                                         width={'100%'} height={'100%'} className={"player"}
                                         muted loop playing/>
                        </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/SASG/sasg_1.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/SASG/sasg_2.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/SASG/sasg_3.png")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ButtonGroup className={"button-holder"}>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://hi-names-nat.itch.io/steady-as-she-goes")}>Demo</h3></button>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://github.com/hi-names-nat/SASG")}>Source</h3></button>
            </ButtonGroup>
        </Container>
    );
}