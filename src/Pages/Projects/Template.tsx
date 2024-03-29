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

export default function ProjectTemplate() {
    return (
        <Container>
            <div  className={"header-div"}>
                <h1 className={"header"}>Netscape Cybermind</h1>
            </div>
            <div className={"info-div"}>
                <div className={"text-holder"}>
                    <p className={"paragraph"}>
                        This is a project I have been working on with Josh Wilson and the rest of Team Netscape.
                        It is a first person shooter in Unity inspired by the likes of Half-Life. My experience with designing
                        levels and mechanics in the Source engine has helped me view the development of the game in a
                        unique light compared to my colleagues. Together we are crafting a unique experience that
                        is currently planned to release in parts.
                    </p>
                    <h3 className={"header"}>Contributions</h3>
                    <ul className={"paragraph"} style={{textAlign: "left", display: 'inline-block'}}>
                        <li>
                            Level and art design in Unity Engine.
                        </li>
                        <br/>
                        <li>
                            Design and implementation for new systems, such as AI using C#.
                        </li>
                        <br/>
                        <li>
                            Redesign and implementation for old systems, such as the player controller using C#.
                        </li>
                    </ul>
                </div>
                <div>
                    <Carousel className={"carousel"}>
                        <Carousel.Item>
                                <ReactPlayer url={"https://youtu.be/9x0TdJx6lSY"}
                                             width={'42vw'} height={'43vh'} className={"player"}
                                             muted loop playing/>
                            </ Carousel.Item>
                        <Carousel.Item>
                            <ReactPlayer url={"https://youtu.be/3_R_CHy9wNQ"}
                                         width={'42vw'} height={'43vh'} className={"player"}
                                         muted loop playing/>
                        </ Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/warn.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Netscape/netscape_1.png")} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={"media-wrapper"}>
                                <Image className={"image"} src={require("../../Assets/Netscape/netscape_2.png")} />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <ButtonGroup className={"button-holder"}>
                <button className={"button"} ><h3 className={"header"} onClick={() => openInNewTab("https://joshomaton.itch.io/netscape-cybermind")}>Demo</h3></button>
            </ButtonGroup>
        </Container>
    );
}