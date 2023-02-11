import {Image} from "react-bootstrap";
import React from "react";
import "./About.css"
import me from "../../Assets/me.png";


export default function About() {
    return (
        <div className={"main-div"}>
            <div style={{marginLeft: '25%'}}>
                <Image src={me} />
            </div>
            <div className={"holder-div"} style={{textAlign: 'center', backgroundColor: 'red', flex: 1}}>
                <h1>Hello! My name is Natalie!</h1>
                <p>
                    I'm a game designer and programmer who's worked both independently and in a team setting on
                    many projects, with the notable example of Netscape Cybermind. I currently attend Ohio
                    University and have an active role as the president of the Ohio University Game Developers Association
                    (a chapter of IGDA), as well as offering tutoring services for level design, game design
                    and game programming for the club.
                </p>
                <br />
                <p>Feel free to send me an email at <a href={`mailto:natalie.soltis@outlook.com`}>natalie.soltis@outlook.com</a> to ask questions or even just chat!</p>
                <br />
                <h3>References</h3>
                <p>
                    Here are some people that you can contact if you wish to know more about me and what I do.

                    Dana Woltz, Former President of OUGDA and co-worker: <a href={`mailto:natalie.soltis@outlook.com`}>gamedevdana@gmail.com</a>
                </p>
            </div>
        </div>
)
}