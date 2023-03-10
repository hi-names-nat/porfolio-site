import './App.css';
import Topbar from "./Components/Topbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Components/Router";
import Footer from "./Components/Footer/Footer";


function App() {

  return (
    <div className="App">
        <a rel={"me"} href={"https://mastodon.gamedev.place/@Hi_Names_Nat"} />
        <div className={'Content'}>
            <Topbar />
            <Router/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
