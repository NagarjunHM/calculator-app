import React from "react";
import { LuDelete } from "react-icons/lu";

const OperationCalculator = () => {
  return (
    <div>
      <table className=" font-semibold">
        <tr>
          <td className="border  border-slate-400 text-slate-700 text-center py-4 px-8  m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            C
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            <LuDelete />
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            %
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            /
          </td>
        </tr>
        <tr>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            7
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            8
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            9
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            *
          </td>
        </tr>
        <tr>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            4
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            5
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            6
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            -
          </td>
        </tr>
        <tr>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            1
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            2
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            3
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            +
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer"
          >
            0
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            .
          </td>
          <td className="border border-slate-400 text-slate-700 text-center py-4 px-8 m-0 text-xl bg-slate-50 duration-150 hover:bg-slate-200 cursor-pointer">
            =
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OperationCalculator;
