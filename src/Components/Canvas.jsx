import React from "react";
import ReactFlowRenderer from "./ReactFlowRenderer";

const Canvas = () => {
  return (
    <div className="h-[100vh] flex bg-slate-100 mt-[4rem] w-[100%] overflow-hidden relative">
        <ReactFlowRenderer />
    </div>
  );
};

export default Canvas;
