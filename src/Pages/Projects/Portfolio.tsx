import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DemoVideo from "../../Components/DemoVideo/DemoVideo";
import "./Portfolio.css"
import ReactPlayer from "react-player";
export default function Portfolio() {
    return (
    <div className={"main-div"}>
        <Container className={"demovid-container"}>
            <DemoVideo link={"https://youtu.be/jNQXAC9IVRw"} name={"Netscape Cybermind"}
                       video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} about={
                "A fast-paced first person shooter taking heavy inspiration from Half-Life and the internet culture " +
                "of the 1990s. Developed in Unity Engine."
            } />
        </Container>

        <Container className={"demovid-container"}>
        <DemoVideo link={"https://youtu.be/jNQXAC9IVRw"} name={"Green Lion"}
                   video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} about={
            "An open-world game about collecting resources and discovering recipes in an attempt to cure yourself of " +
            "a disease. Developed in Unreal Engine."
        } />
        </Container>

        <Container className={"demovid-container"}>
            <DemoVideo link={"https://youtu.be/jNQXAC9IVRw"} name={"Steady As She Goes"}
                       video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} about={
                "A resource-management game about being a starship engineer, Your captain demanding" +
                " too much of you. Developed in Unity Engine."
            } />
        </Container>

        <Container className={"demovid-container"}>
            <DemoVideo link={"https://youtu.be/jNQXAC9IVRw"} name={"Bobcat Project"}
                       video={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} about={
                "A small game developed for the McClure school at Ohio University. " +
                "Raise a character so that they may achieve their goals. Developed in Unity Engine."
            } />
        </Container>

    </div>
    )
}