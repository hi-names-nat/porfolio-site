import React from "react";
import {Col, Image, Placeholder, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DemoVideo from "../../Components/DemoVideo/DemoVideo";
import DemoVideoPlaceHolder from "../../Components/DemoVideo/Placeholder"
import "./Portfolio.css"
import ReactPlayer from "react-player";
export default function Portfolio() {
    return (
    <div>

        <div className={"row-wrapper"}>
            <div className={"demovid-container"}>
                <DemoVideo link={"/NSCM"} name={"Netscape Cybermind"}
                           video={"https://youtu.be/9x0TdJx6lSY"} about={
                    "A fast-paced first person shooter taking heavy inspiration from Half-Life and the internet culture " +
                    "of the 1990s. Developed in Unity Engine."
                } />
            </div>

            <div className={"demovid-container"}>
                <DemoVideo link={"/Dreamrunner"} name={"Blazing Moon"}
                           video={"https://youtu.be/IWMTMeE2-Os"} about={
                    "A 3D Adventure game developed in 72 hours in which you explore the world on the verge of collapse." +
                    " Developed in the Unreal Engine."
                } />
            </div>

            <div className={"row-wrapper"}>
                <div className={"demovid-container"}>
                    <DemoVideo link={"/Bobcat"} name={"Bobcat Project"}
                               video={"https://youtu.be/5a7NQGGwtWY"} about={
                        "A small game developed for the McClure school at Ohio University. " +
                        "Raise a character so that they may achieve their goals. Developed in Unity Engine."
                    } />
                </div>
                <div className={"demovid-container"}>
                    <DemoVideo link={"/SASG"} name={"Steady As She Goes"}
                               video={"https://youtu.be/Z7SlcVF86q0"} about={
                        "A resource-management game about being a starship engineer and your captain demanding" +
                        " too much of you. Developed in Unity Engine."
                    } />
                </div>

            </div>

            <div className={"row-wrapper"}>
                <div className={"demovid-container"}>
                    <DemoVideo link={"/Adoorable"} name={"Adoorable Hotel"}
                               video={"https://youtu.be/YRP_qQ0vi_Q"} about={
                        "An indie-horror style horror game where you have to escape a monster by collecting" +
                        " parts. Developed in the Unity Engine."
                    } />
                </div>

                <div className={"demovid-container"}>
                    <DemoVideoPlaceHolder/>
                </div>

            </div>
        </div>
        <br/>
    </div>
    )
}