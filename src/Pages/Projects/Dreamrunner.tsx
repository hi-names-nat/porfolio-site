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

export default function Dreamrunner() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Adoorable</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                        "Dreamrunner" was the game I and a group of others developed for the Global Game Jam
                        in 2022. Over the course of 48 hours, we developed a small 3D action-platformer game with a
                        saturday-morning-cartoon, psychonauts-like aesthetic.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", display: 'inline-block'}}>
                        <li>
                            Design and programming of all game systems in C#, including player controller and all
                            other assets.
                        </li>
                        <br/>
                        <li>
                            Level creation in Unity, using Probuilder and assets from the art team.
                        </li>
                        <br/>
                        <li>
                            Concept design and iteration.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                                <ReactPlayer url={require("../../Assets/Dreamrunner/dreamrunner_video1.mp4")}
                                             width={'100%'} height={'100%'} className={"player"}
                                             muted loop playing/>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Dreamrunner/dreamrunner_1.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Dreamrunner/dreamrunner_2.jpg")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ButtonGroup className={"button-holder"}>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://hi-names-nat.itch.io/dreamrunner")}>Demo</h3></button>
            </ButtonGroup>
        </Container>
    );
}