import './App.css';
import Topbar from "./Components/Topbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Components/Router";


function App() {

  return (
    <div className="App">
        <Topbar />
        <Router/>
    </div>
  );
}

export default App;
