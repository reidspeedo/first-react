import FC from "./Components/FunctionalComp";
import {ClassComp,ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click"
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import Classprops from "./Components/Classprops";
import Funtionprops from "./Components/Functionprop";
//import FunctionalComp from "./Components/FunctionalComp";
import React from "react"
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div class = "App">
                <h1>Welcome</h1>

                <h2> Lessons: Class & Functional Components, Higher Components, Pure Components, & Props</h2>
                <div>
                <FC />
                <ClassComp />
                <ClassComp1 />
                <Click />
                <Counter />
                <ParentComp/>
                <Classprops name = 'Student 1' place = 'Africa'>
                    <p>bow wow wow</p>
                </Classprops>
                <Classprops name = 'Student 2' place = 'China'>
                    <button>Click</button>
                </Classprops>
                <Classprops name = 'Student 3' place = 'USA'>
                    <p>Howdy</p>
                </Classprops>
                <Funtionprops name='Student 4'/>
                </div>
            </div>
        )
    }
}

export default App;

/*
function App() {
  return (
      <div>
        <h1>This is fast</h1>
        <h1>This is slow</h1>
        <FC />
        <ClassComp />
        <ClassComp1 />
        <Click />
        <Counter />
        <ParentComp/>
        <Classprops name = 'Student 1' place = 'Africa'>
              <p>bow wow wow</p>
        </Classprops>
        <Classprops name = 'Student 2' place = 'China'>
            <button>Click</button>
        </Classprops>
        <Classprops name = 'Student 3' place = 'USA'>
            <p>Howdy</p>
        </Classprops>
        <Funtionprops name='Student 4'/>
      </div>
  );
}


 */
