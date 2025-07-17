import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EverydayTypes from "./components/EverydayTypes";
import Narrowing from "./components/Narrowing";
import MoreonFunctions from "./components/MoreonFunctions";
import Intro from './components/intro_01/Intro';
import Myfuntions from "./components/basics_02/Myfuntions";

function App() {
  return (
    <div className="App">
      {/* <EverydayTypes /> */}
      {/* <Narrowing /> */}
      {/* {<MoreonFunctions />} */}
      {/* <Intro /> */}
      <Myfuntions />
    </div>
  );
}

export default App;
