import React from "react";
import "./App.css";
import TreeView from "./components/TreeView";
import { data } from "./demodata/demodata";

function App() {
  return (
    <div className="App">
      <TreeView data={data} />
    </div>
  );
}

export default App;
