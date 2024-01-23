import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFile, faGear} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import QuickLink from "./QuickLink";

export default function Slab() {
    return (
        <div className={"slab-body"}>
            <div className={"gear-container"}>
                <FontAwesomeIcon className={"gear-icon"} icon={faGear} spin/>
            </div>
            <div className={"rc-body"}>
                <h2>Reconstruction in progress...</h2>
                <p>Apologies for the inconvenience. Below are quick links to contact and other pertinent
                    information.</p>
            </div>
            <div className={"rc-links"}>
                <QuickLink href={"mailto:natalie.soltis@outlook.com"} icon={faEnvelope} text={"Email"}/>
                <QuickLink
                    href={"https://1drv.ms/b/c/2be6edc901c0620d/EYD3zNKXhLNDoYwKy2LVE34BddOZoPXpyFuXN9ahH369gw?e=ka4dDq"}
                    icon={faFile} text={"Resume"}/>
                <QuickLink href={"https://www.linkedin.com/in/hi-names-nat/"} icon={faLinkedin} text={"LinkedIn"}/>
                <QuickLink href={"https://github.com/hi-names-nat"} icon={faGithub} text={"GitHub"}/>
            </div>
        </div>
    );
}