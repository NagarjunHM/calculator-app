import React from "react";
import DisplayCalculator from "./components/DisplayCalculator";
import OperationCalculator from "./components/OperationCalculator";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="w-auto p-2 border rounded shadow-lg">
        <DisplayCalculator />
        <OperationCalculator />
      </div>
    </div>
  );
};

export default App;
