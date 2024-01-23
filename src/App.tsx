import './output.css';
import Slab from "./RConstruct/Components/Slab";
import Header from "./RConstruct/Components/Header"

function App(): JSX.Element {

  return (
    <div className={"App"}>
      <div className={"bg-image"}>
        <Header/>
        <Slab/>
      </div>
    </div>
  );
}

export default App;
