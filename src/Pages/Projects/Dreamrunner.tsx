import {Image, Row, Col, Carousel, ButtonGroup} from "react-bootstrap";
import React from "react";
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import ReactPlayer from "react-player/youtube";
import "./Template.css"
import YouTubePlayer from "react-player/youtube";


const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default function Dreamrunner() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Blazing Moon</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                        "Blazing Moon" was developed for Ludum Dare 54 by myself and Isaac Phillips. Our goal for this
                        project was to refine our knowledge of the Unreal Engine pipeline and have an opporitunity to interface
                        with Unreal Engine systems we hadn't yet used. We are quite happy with what we've learned throughout the
                        course of the project.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", display: 'inline-block'}}>
                        <li>
                            Design and programming of all game systems in C++.
                        </li>
                        <br/>
                        <li>
                            Level creation in Unreal, using Brush Toolkit and assets from the web.
                        </li>
                        <br/>
                        <li>
                            Iterated upon original concept devised by Isaac Phillips.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                            <div className={"video-wrapper"}>
                                <YouTubePlayer className={"react-player"} url={"https://youtu.be/IWMTMeE2-Os"}
                                             width={'42vw'} height={'43vh'}
                                             muted loop playing/>
                            </div>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/BlazingMoon/CoolForest.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/BlazingMoon/CoolCity.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/BlazingMoon/CoolWing.png")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ButtonGroup className={"button-holder"}>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://ldjam.com/events/ludum-dare/54/blazing-moon")}>Game</h3></button>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://github.com/hi-names-nat/blazingmoon.git")}>Source Code</h3></button>
            </ButtonGroup>
        </Container>
    );
}