import {Image, Row, Col} from "react-bootstrap";
import React from "react";
import "./About.css"
import "../../UnifiedCSS.css"
import me from "../../Assets/me.png";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function About() {
    return (
        <div className={"main-div"}>
            <Container className={"image-div"}>
                <Row>
                    <Col>
                        <Image src={me} className={"self-image"} rounded={true} fluid={true}/>
                        <div className={"socials"}>
                            <a href={"https://www.linkedin.com/in/hi-names-nat/"} target={"_blank"} className={"links"}>
                                <FontAwesomeIcon icon={brands('linkedin')} color={'white'} size={'3x'}/>
                            </a>
                            <a href={"https://mastodon.gamedev.place/@Hi_Names_Nat"} target={"_blank"} className={"links"}>
                                <FontAwesomeIcon icon={brands('mastodon')} color={'white'} size={'3x'}/>
                            </a>
                            <a href={"https://github.com/hi-names-nat"} target={"_blank"} className={"links"}>
                                <FontAwesomeIcon icon={brands('github')} color={'white'} size={'3x'}/>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <h1 className={"header"}>Hi, I'm Natalie!</h1>
                        <p className={"paragraph"} style={{textAlign: 'left'}}>
                            My name is Natalie Soltis: a passionate game designer and programmer
                            with five years of experience in crafting stand-out worlds and gameplay and working with
                            teams, both large and small.
                        </p>
                        <p className={"paragraph"} style={{textAlign: 'left'}}>
                            I currently attend Ohio University and have an active role as the president of the
                            Ohio University Game Developers Association (a chapter of The International Game Developers
                            Association), as well as offering tutoring services for skills such as C++, C#, Unity, Unreal,
                            Rust, Godot, Game Design, and Level Design.</p>
                        <p className={"paragraph"} style={{textAlign: 'left'}}>Feel free to send me an email at <a className={"hyperlink"} href={`mailto:natalie.soltis@outlook.com`}>natalie.soltis@outlook.com</a> to ask questions or even just chat!</p>
                        <br />
                        <h3 className={"header"}>References</h3>
                        <p className={"paragraph"} style={{textAlign: 'left'}}>
                            Here are some people that you can contact if you wish to know more about me and what I do.</p>
                        <p className={"paragraph"} >
                            Dana Woltz, Former President of OUGDA: <a className={"hyperlink"} href={`mailto:gamedevdana@gmail.com`}>gamedevdana@gmail.com</a>
                        </p>
                        <br/>
                        <h3 className={"header"}>Resume</h3>
                        <p className={"paragraph"}>
                            You can find my resume <a className={"hyperlink"} href={require("../../Assets/Resume.pdf")}>here</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
)
}