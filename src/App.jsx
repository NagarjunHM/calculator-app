import React from "react";
import DisplayCalculator from "./components/DisplayCalculator";
import OperationCalculator from "./components/OperationCalculator";
import "./App.css";

const App = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-300 unselectable">
      <div className="absolute top-0 p-2 text-3xl font-bold tracking-wider border-b-2 border-slate-500">
        CALCULATOR
      </div>
      <div className="w-auto p-2 border-2 rounded shadow-xxl bg-gray-50">
        <DisplayCalculator />
        <OperationCalculator />
      </div>
    </div>
  );
};

export default App;
