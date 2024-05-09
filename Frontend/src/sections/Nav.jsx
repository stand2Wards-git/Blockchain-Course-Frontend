import { GoHeartFill } from "react-icons/go";
import { FaLocationArrow } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  const [selected, setSelected] = useState("learn");
  return (
    <section
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
      }}
      className="flex w-full h-12 bg-mid-purple text-white justify-between items-center px-4 border border-primary border-t-0 border-r-0 border-l-0 border-b-1"
    >
      <div className="flex">
        <h2 className="font-montserrat text-xl font-semibold">Chain-Learn</h2>
        <div className="ml-6">
        <Link to="/"> 
          <span
            className={`${
              selected === "learn"
                ? "text-white border-y-2 border-t-0 pb-[13px] border-light-purple"
                : "text-light-gray"
            } mr-3 cursor-pointer p-1`}
            onClick={() => {
              setSelected('learn');
            }}
          >
            learn
          </span>
          </Link>
          <Link to="/leaderboard"  onClick={() => {
              setSelected('leaderBoard');
            }}> 
                  <span
            className={`${
              selected === "leaderBoard"
                ? "text-white border-y-2 border-t-0 pb-[13px] border-light-purple  "
                : "text-light-gray"
            } cursor-pointer p-1`}
           
          >
            leaderBoard
          </span>
            </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className="flex gap-1.5 border rounded-md px-4 py-1
        border-primary justify-center items-center hover:bg-primary cursor-pointer"
        >
          <span className="text-sm">5</span>
          <GoHeartFill className="text-red-500" />
        </div>
        <button className="bg-purple px-3 rounded-md font-palanquin font-semibold flex items-center gap-1 py-1">
          Get App <FaLocationArrow className="text-xs mt-0.5" />
        </button>

        <CgProfile className="text-3xl ml-2" />
      </div>
    </section>
  );
};

export default Nav;
