import ReactPlayer from "react-player/youtube";
import "./DemoVideo.css"
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import React from "react";

export type VideoProps=  {
    name: string;
    about: string;
    link: string;
    video: string;
}

export default function DemoVideoPlaceHolder() {
    return (
        <Container className={"main-container"}>
            <h3 className={"header"}>More?</h3>
            <div className={"info-container"}>
                <Row>
                    <Col className={"player-wrapper"}>
                        <img src={require("../../Assets/Dreamrunner/dreamrunner_1.png")} className={"player"} style={{width:'30vw', height:'30vh'}}/>
                    </Col>
                    <Col>
                        <div className={"desc-div"}>
                            <p className={"paragraph"}>Always in progress...</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}