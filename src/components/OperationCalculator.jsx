import React from "react";
import { LuDelete } from "react-icons/lu";
import { useDispatch } from "react-redux";
import {
  buttonInput,
  clearInput,
  resultCalculation,
  deleteLastCharacter,
} from "../redux/calculatorReducer";

const OperationCalculator = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <table className="font-semibold ">
        <tbody>
          <tr>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => {
                dispatch(clearInput());
              }}
            >
              C
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => {
                dispatch(deleteLastCharacter());
              }}
            >
              <LuDelete />
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(" % "))}
            >
              %
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(" / "))}
            >
              /
            </td>
          </tr>
          <tr>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput("7"))}
            >
              7
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(8))}
            >
              8
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(9))}
            >
              9
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(" * "))}
            >
              *
            </td>
          </tr>
          <tr>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(4))}
            >
              4
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(5))}
            >
              5
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(6))}
            >
              6
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(" - "))}
            >
              -
            </td>
          </tr>
          <tr>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(1))}
            >
              1
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(2))}
            >
              2
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(3))}
            >
              3
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => {
                dispatch(buttonInput(" + "));
              }}
            >
              +
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput(0))}
            >
              0
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => dispatch(buttonInput("."))}
            >
              .
            </td>
            <td
              className="px-8 py-4 m-0 text-xl text-center duration-150 border cursor-pointer border-slate-400 text-slate-700 bg-slate-50 hover:bg-slate-200"
              onClick={() => {
                dispatch(resultCalculation());
              }}
            >
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OperationCalculator;
