import './output.css';
import {faGear} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App(): JSX.Element {

  return (
    <div className={"App"}>
      <div className={"bg-image"}>
        <div className={"rc-header"}>
          <h1>Natalie Soltis's Website</h1>
          <h3>software developer with skills in both high level and low level software development</h3>
        </div>

        <div className={"slab-body"}>
          <div className={"gear-container"}>
            <FontAwesomeIcon className={"gear-icon"} icon={faGear} spin/>
          </div>
          <div className={"rc-body"}>
            <h2>This website is currently undergoing major reconstruction.</h2>
            <h3>Apologies for the inconvenience. Below are quick links to contact and pertinent information.</h3>
          </div>
          <div className={"rc-links"}>
            <a className={"rc-grid-element"} href={"here"}>Link 1</a>
            <a className={"rc-grid-element"} href={"here"}>Link 1</a>
            <a className={"rc-grid-element"} href={"here"}>Link 1</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
