import ReactPlayer from "react-player";
import "./DemoVideo.css"
import "../../UnifiedCSS.css"
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export type VideoProps=  {
    name: string;
    about: string;
    link: string;
    video: string;
}

export default function DemoVideo(props : VideoProps) {
    return (
        <Container className={"main-container"}>
            <h3 className={"header"}> <a href={props.link} className={"hyperlink-header"}>{props.name}</a></h3>
            <div className={"info-container"}>
                <Row>
                    <Col className={"player-wrapper"}>
                        <ReactPlayer className={"player"} url={props.video} muted loop playing controls width={'30vw'} height={'30vh'}/>
                    </Col>
                    <Col>
                        <div className={"desc-div"}>
                            <p className={"paragraph"}>{props.about}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}