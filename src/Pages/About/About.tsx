import {Image, Row, Col} from "react-bootstrap";
import React from "react";
import "./About.css"
import "../../UnifiedCSS.css"
import me from "../../Assets/me.png";
import Container from "react-bootstrap/Container";

export default function About() {
    return (
        <div className={"main-div"}>
            <Container className={"image-div"}>
                <Row>
                    <Col>
                        <Image src={me} className={"self-image"} rounded={true} fluid={true}/>
                    </Col>
                    <Col>
                        <h1 className={"header"}>Hi, I'm Natalie.</h1>
                        <p className={"paragraph"}>
                            I'm a game designer and programmer who's worked both independently and in a team setting on
                            multiple projects large and small. I currently attend Ohio University and have an active
                            role as the president of the Ohio University Game Developers Association
                            (a chapter of IGDA), as well as offering tutoring services for skills such as programming,
                            engine use, game design, and level design.
                        </p>
                        <br />
                        <p className={"paragraph"}>Feel free to send me an email at <a className={"hyperlink"} href={`mailto:natalie.soltis@outlook.com`}>natalie.soltis@outlook.com</a> to ask questions or even just chat!</p>
                        <br />
                        <h3 className={"header"}>References</h3>
                        <p className={"paragraph"}>
                            Here are some people that you can contact if you wish to know more about me and what I do.</p>
                        <p className={"paragraph"}>
                            Dana Woltz, Former President of OUGDA: <a className={"hyperlink"} href={`mailto:gamedevdana@gmail.com`}>gamedevdana@gmail.com</a>
                        </p>
                        {/* TODO: add more stuff later please */}
                    </Col>
                </Row>
            </Container>
        </div>
)
}