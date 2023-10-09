import {Image, Row, Col, Carousel, ButtonGroup} from "react-bootstrap";
import React from "react";
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player/youtube";
import "./Template.css"


const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function Adoorable() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Adoorable Hotel</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                        "Adoorable" was a part of the SPOUGDA Game Jam in October 2021 that I helped create. The game
                        was inspired by various very silly indie horror games, and we sought to create something
                        with that sort of feeling. I am particularly fond of the art, which was done by a close friend
                        of mine.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", display: 'inline-block'}}>
                        <li>
                            Level creation in Unity, using Probuilder and assets.
                        </li>
                        <br/>
                        <li>
                            Design and programming of all game systems in C#.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                                <ReactPlayer url={"https://youtu.be/YRP_qQ0vi_Q"}
                                             width={'42vw'} height={'43vh'} className={"player"}
                                             muted loop playing/>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <ReactPlayer url={"https://youtu.be/9oaYl3CaC3c"}
                                         width={'42vw'} height={'43vh'} className={"player"}
                                         muted loop playing/>
                        </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Adoorable/adoorable_1.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Adoorable/adoorable_2.jpg")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Adoorable/adoorable_3.jpg")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ButtonGroup className={"button-holder"}>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://hi-names-nat.itch.io/adorable-hotel")}>Demo</h3></button>
            </ButtonGroup>
        </Container>
    );
}