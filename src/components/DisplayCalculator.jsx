import React from "react";
import { calculatorSelector } from "../redux/calculatorReducer";
import { useSelector } from "react-redux/es/hooks/useSelector";

const DisplayCalculator = () => {
  const { result, input } = useSelector(calculatorSelector);
  return (
    <div className="flex items-center justify-end h-24 mb-1 rounded bg-slate-900">
      <div className="m-2 overflow-auto text-2xl font-semibold text-slate-50">
        {input !== "" ? input : <span className="text-slate-500">000</span>}
        {/* {result} */}
      </div>
    </div>
  );
};

export default DisplayCalculator;
