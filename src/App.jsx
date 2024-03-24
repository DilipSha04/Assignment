import React from "react";
import "reactflow/dist/style.css";
import Navbar from "./Components/Navbar";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <div className="bg-slate-100 h-[100vh] flex flex-col">
      <Navbar />
      <Canvas />
    </div>
  );
}

export default App;
