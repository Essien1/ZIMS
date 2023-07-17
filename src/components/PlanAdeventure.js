import React from "react";
import { Link } from "react-router-dom";
import Tickets from "./Tickets";

const PlanAdeventure = () => {
  return (
    <div className="max-w-[1240px] mt-10 mx-auto py-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-orange-200 py-9 px-8 rounded-xl ">
          <h3 className="font-bold text-2xl mb-4">General Guidlines</h3>
          <li className="pl-4">No smoking on the premises</li>
          <li className="pl-4">
            Feeding or touching the animals is strictly prohibited
          </li>
          <li className="pl-4">No re-entry after entering the park</li>
          <li className="pl-4">
            The facility is under constant video surveillance
          </li>

          <div className="pt-6">
            <button className="bg-orange-400"><Link to='/park'>Park Rules</Link> </button>
          </div>
        </div>

        <div className="bg-zinc-100 py-4 px-4 rounded-xl p-9">
          <div className="py-5 px-8">
            <h3 className="font-bold text-2xl mb-2">Park Hours</h3>

            <div className="flex justify-between py-2 border-b-2 border-zinc-300">
              <p className="text-[1rem]">Open Daily</p>
              <p className="text-[1rem] font-thin ">8:00am</p>
            </div>
            <div className="flex justify-between py-2 border-b-2 border-zinc-300">
              <p className="text-[1rem]">Last Car Admitted</p>
              <p className="text-[1rem] font-thin ">6:00pm</p>
            </div>
            <div className="flex justify-between py-2 border-b-2 border-zinc-300">
              <p className="text-[1rem]">Closes</p>
              <p className="text-[1rem] font-thin ">7:30pm</p>
            </div>
            <div className=" py-2">
              <p className="text-[1rem]  text-[#41ba4f]">
                *Hours may vary on holidays. Call for the most accurate
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanAdeventure;
