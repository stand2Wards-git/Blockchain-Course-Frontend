import { useState } from "react";
import { SECTIONS } from "../components";

const CourseLeft = ({ setIndex: setIndex, index: index }) => {
  const [completedCoursePer, setCompletedCoursePer] = useState(40);

  return (
    <div  className="max-w-[400px] w-[400px] fixed flex-1 p-6 flex-row">
      <div>
        <p className="text-light-gray font-montserrat text-sm font-semibold">
          COURSE
        </p>
        <p className="text-white my-4 font-montserrat text-[20px] font-bold">
          BLOCKCHAIN
        </p>
        <div className="w-full bg-mid-purple rounded-full h-1.5 ">
          <div
            className="bg-light-purple h-1.5 rounded-full"
            style={{ width: `${completedCoursePer}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1 text-light-gray text-sm">
          <span>{completedCoursePer}% Completed</span>
          <span>2/5</span>
        </div>
      </div>

      <div className="mt-12 flex-1 ">
        <p className="text-light-gray font-montserrat text-sm font-semibold mb-3">
          SECTIONS
        </p>
        {SECTIONS.map((section, i) => (
          <div
            key={i}
            className={`text-white text-[15px] font-semibold flex justify-between  py-2 px-4 my-2 -mx-3 rounded-[12px] hover:bg-mid-purple cursor-pointer ${
              index === i ? "border border-primary bg-mid-purple" : ""
            }`}
            onClick={() => setIndex(i)}
          >
            <div>
              <span className="text-light-gray">{i + 1}. </span>
              {section.name}
            </div>
            <span className="text-light-gray">
              {section.completedModule}/{section.module}
            </span>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CourseLeft;
