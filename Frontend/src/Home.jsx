import Nav from "./sections/Nav";
import CourseLeft from "./sections/CourseLeft";
import RightModuleContainer from "./sections/RightModuleContainer";
import { useState } from "react";
import { RecoilRoot } from "recoil";

function Home() {
  const [showRightSection, setShowRightSection] = useState(true);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  // all function
  const toggleRightPannel = () => {
    setShowRightSection(!showRightSection);
  };

  const changSectionIndex = (index) => {
    setSelectedSectionIndex(index);
  };


  return (
    <section className="bg-dark-purple w-full min-h-[100vh] flex  flex-col ">
     
      <Nav />
      <div className="flex w-full flex-1 mt-12">
        <div
          className={`transition ${
            showRightSection === false ? 'opacity-0' : 'opacity-100'
          } border border-t-0 border-b-0 border-l-0 border-primary `}
          style={{
            minWidth: showRightSection ? "400px" : "0",
            overflow: "hidden",
            transition: "min-width 0.4s ease-in-out, opacity 0.1s ease-in-out",
          }}
        >
          <CourseLeft
            setIndex={setSelectedSectionIndex}
            index={selectedSectionIndex}
          />
        </div>
        <RightModuleContainer
          toggleRightPannel={toggleRightPannel}
          index={selectedSectionIndex}
          changSectionIndex={changSectionIndex}
        />
      </div>
    </section>
  );
}

export default Home;
