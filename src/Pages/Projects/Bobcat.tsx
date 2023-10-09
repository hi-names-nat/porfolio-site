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

export default function Bobcat() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Project Bobcat</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                       I and my team are developing Project Bobcat for the J. Warren McClure school of Emerging Communcation
                        Design in Ohio University. The project started in 2020, and since 2021, I have been the project lead.
                        I direct my team and communicate with the client whilst designing and programming systems in C#.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", display: 'inline-block'}}>
                        <li>
                            Design and programming of all game systems in C#
                        </li>
                        <br/>
                        <li>
                            Managing and goal-setting a team of artists.
                        </li>
                        <br/>
                        <li>
                            Communication and goal-setting with client.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                                <ReactPlayer url={"https://youtu.be/5a7NQGGwtWY"}
                                             width={'42vw'} height={'43vh'} className={"player"}
                                             muted loop playing/>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Bobcat/bobcat_1.webp")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Bobcat/bobcat_2.webp")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Bobcat/bobcat_3.webp")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Container>
    );
}