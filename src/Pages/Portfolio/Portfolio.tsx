import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DemoVideo from "../../Components/DemoVideo/DemoVideo";
import "./Portfolio.css"
import ReactPlayer from "react-player";
export default function Portfolio() {
    return (
    <div>

        <div className={"row-wrapper"}>
            <div className={"demovid-container"}>
                <DemoVideo link={"/NSCM"} name={"Netscape Cybermind"}
                           video={require("../../Assets/Netscape/netscape_video1.mp4")} about={
                    "A fast-paced first person shooter taking heavy inspiration from Half-Life and the internet culture " +
                    "of the 1990s. Developed in Unity Engine."
                } />
            </div>
            <div className={"demovid-container"}>
                <DemoVideo link={"/Bobcat"} name={"Bobcat Project"}
                           video={require("../../Assets/Bobcat/bobcat_video.mp4")} about={
                    "A small game developed for the McClure school at Ohio University. " +
                    "Raise a character so that they may achieve their goals. Developed in Unity Engine."
                } />
            </div>

            <div className={"row-wrapper"}>
                <div className={"demovid-container"}>
                    <DemoVideo link={"/SASG"} name={"Steady As She Goes"}
                               video={require("../../Assets/SASG/SASG.mp4")} about={
                        "A resource-management game about being a starship engineer and your captain demanding" +
                        " too much of you. Developed in Unity Engine."
                    } />
                </div>

                <div className={"demovid-container"}>
                    <DemoVideo link={"/Adoorable"} name={"Adoorable Hotel"}
                               video={require("../../Assets/Adoorable/adoor_video1.mp4")} about={
                        "An indie-horror style horror game where you have to escape a monster by collecting" +
                        " parts. Developed in the Unity Engine."
                    } />
                </div>
            </div>

            <div className={"row-wrapper"}>
                <div className={"demovid-container"}>
                    <DemoVideo link={"/Dreamrunner"} name={"Dreamrunner"}
                               video={require("../../Assets/Dreamrunner/dreamrunner_video1.mp4")} about={
                        "A 3D Platformer game in which you take the role of a 'dreamrunner', a person" +
                        " who influences dreams. Developed in Unity Engine."
                    } />
                </div>
            </div>
        </div>
        <br/>
    </div>
    )
}