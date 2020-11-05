//import logo from './logo.svg';
import './App.css';
import FC from "./Components/FunctionalComp";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click"


function App() {
  return (
      <div>
        <h1>This is fast</h1>
        <h1>This is slow</h1>
        <FC />
        <ClassComp />
        <ClassComp1 />
        <Click />
      </div>
      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      */
  );
}

export default App;
