import React, { useState } from "react";
import M1 from "./Modules/M1";


import { RiMenu2Fill } from "react-icons/ri";
import { SECTIONS } from "../components";
import ChatBot from "./ChatBot";
import { GoDiscussionDuplicate } from "react-icons/go";

const RightModuleContainer = ({ index: index, toggleRightPannel:toggleRightPannel}) => {
  const [showChatBot, setShowChatBot] = useState(false);
  return (
    <section  className=" flex h-[calc(100vh-49px)] w-full flex-col  overflow-y-auto">
      <div className="flex min-w-[700px] xl:min-w-[950px] justify-between items-center border border-b-1 border-x-0 border-t-0 py-1.5 px-2 border-primary text-white sticky top-0 left-0 right-0 z-20 bg-dark-purple">
        <div className="cursor-pointer hover:bg-mid-purple p-2 rounded-md" onClick={toggleRightPannel}>
          <RiMenu2Fill className="text-xl " />
        </div>
        <div className="font-semibold">
          <span className="text-light-gray">{index + 1}.</span>{" "}
          {SECTIONS[index].name}
        </div>
        <div className="flex mr-2 items-center gap-2 text-sm font-semibold">
          <span>
            {SECTIONS[index].completedModule}/{SECTIONS[index].module}
          </span>
          <div className="w-[120px] bg-mid-purple rounded-full h-1.5 ">
            <div
              className="bg-light-purple h-1.5 rounded-full"
              style={{
                width: `${
                  (SECTIONS[index].completedModule / SECTIONS[index].module) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[700px] xl:min-w-[950px] px-10 mx-auto transition">

        <M1 moduleIndex={index+1}/> 
      </div>
      {showChatBot ? 
      <ChatBot setShowChatBot={setShowChatBot} />
      :
      <div className="absolute bottom-[40px] right-[50px] cursor-pointer hover:ring-2 ring-light-gray bg-light-purple p-4 rounded-lg" onClick={() => {setShowChatBot(true)}}>
        <GoDiscussionDuplicate className="text-[26px]"/>
      </div>
       }
    </section>
  );
};

export default RightModuleContainer;
