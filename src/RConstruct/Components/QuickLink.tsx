import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type LinkProps=  {
    href: string;
    icon: IconDefinition;
    text: string
}

export default function QuickLink(props: LinkProps) {
    return(
        <a className={"rc-grid-element"} href={props.href} target={"_blank"} rel={"noopener noreferrer"}>
            <FontAwesomeIcon className={"rc-link-icon"} icon={props.icon}/>
            <p className={"rc-link-text"}>
                {props.text}
            </p>
        </a>

    );
}