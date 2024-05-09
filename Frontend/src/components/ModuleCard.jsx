import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";

const ModuleCard = ({ done = false, selected = false, title, type, onClick, maxWidth=270}) => {
  if (selected) {
    return (
      <div className="z-10 border-4 border-light-purple rounded-[32px] p-3 -m-3 pb-6 " >
        <div className="h-36 translate-y-[calc(12px)] rounded-3xl bg-mid-purple z-5 flex flex-col max-w-[270px]" onClick={onClick}>
          <div className="flex-1 rounded-3xl -translate-y-[calc(12px)] bg-extar-light-purple hover:-translate-y-[calc(5px)] border-4 border-mid-purple z-10 cursor-pointer flex">
            <div className="flex-1 m-2 text-white">
              <p className="mt-2 ml-2 font-montserrat text-sm font-semibold ">
                {type}
              </p>
              <p className="mt-2 ml-2 mr-1 text-wrap text-xl  font-semibold">
                {title}
              </p>
            </div>
            <div className="flex items-end mr-6 my-6 text-white">
              <FaPlay className="w-7 h-7 p-0" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (done) {
    return (
      <div className={`z-10 max-w-[${maxWidth}px]`} onClick={onClick}>
        <div className="h-36 translate-y-[calc(12px)] rounded-3xl bg-purple z-5 flex flex-col ">
          <div className="flex-1 rounded-3xl -translate-y-[calc(12px)] bg-light-purple hover:-translate-y-[calc(5px)] border-4 border-purple z-10 cursor-pointer flex">
            <div className="flex-1 m-2">
              <p className="mt-2 ml-2 font-montserrat text-sm font-semibold text-dark-purple">
                {type}
              </p>
              <p className="mt-2 ml-2 mr-1 text-wrap text-xl text-dark-purple font-semibold">
                {title}
              </p>
            </div>
            <div className="flex items-end mr-6 my-6 text-purple">
              <FaCheck className="w-7 h-7 p-0" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`z-10 max-w-[${maxWidth}px]`}  onClick={onClick}>
      <div className="h-36 translate-y-[calc(12px)] rounded-3xl bg-mid-purple z-5 flex flex-col ">
        <div className=" flex-1 rounded-3xl -translate-y-[calc(12px)] bg-extra-dark-purple hover:-translate-y-[calc(5px)] border-4 border-mid-purple z-10 cursor-pointer flex">
        <div className="flex-1 m-2 text-white-400">
              <p className="mt-2 ml-2 font-montserrat text-sm font-semibold">
                {type}
              </p>
              <p className="mt-2 ml-2 mr-1 text-wrap text-xl font-semibold">
                {title}
              </p>
            </div>
            <div className="flex items-end mr-6 my-6 text-white-400">
              <FaLock className="w-7 h-7 p-0" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
