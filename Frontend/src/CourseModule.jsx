import { RxCross1 } from "react-icons/rx";
import React, { useState,useEffect } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GoHeartFill } from "react-icons/go";




function CourseModule() {
  const [currentModule, setCurrentModule] = useState(0);
  const [ModuleData, setModuleData] = useState(null);

  useEffect(() => {
    const fetchModuleData = () => {
      try {
        // setTimeout(()=>{
          import('./course.json').then(({ default: data }) => {
            setModuleData(data);
          });
        // },2000)
      } catch (error) {
        console.error("Error fetching module data:", error);
        alert("Something went wrong while fetching module data.");
      }
    };
    fetchModuleData();
  }, []); 

  const changeSlide = (i) => {
    setCurrentModule(i);
  };

  const nextSlide =()=>{
    if(ModuleData){
      if(currentModule < ModuleData.length-1){
        setCurrentModule(currentModule+1)
      }
    }
  }

  const backSlide =()=>{
    if(ModuleData){
      if(currentModule > 0){
        setCurrentModule(currentModule-1)
      }
    }
  }


  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed', overflow: 'hidden' }}>
      <NavBar />
      {ModuleData ? (
        <div style={{ display: 'flex', justifyContent: 'row', width: '100%', height: '100%', overflow: 'auto', marginTop: '0px' }}>
          <SideBar moduleObject={ModuleData} currentModule={currentModule} onChangeSlide={changeSlide} />
          <Pannel moduleContent={ModuleData[currentModule].content} onNextSlide={nextSlide} onBackSlide={backSlide}/>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}




function Pannel(props) {
  const BackButtonStyle = {
    background: "mid-purple",
    color: 'mid-purple',
    borderRadius: "8px",
    padding: "4px 8px"
  }
  return (
    <div  className="bg-dark-purple" style={{ height: "100%", width: "80%", overflow: "auto" }}>
      <div className="bg-light-purple flex-1" style={{  width: "60%", margin: "auto", borderRadius: "16px", overflow: "auto", padding: "24px", display: "flow", margin: "50px auto", marginBottom: "100px" }}>
        {props.moduleContent}
      </div>
      <div style={{ width:"270px", marginBottom: "50px", position: "fixed", bottom: "0", right: "0", display: "flex", justifyContent: "space-evenly" }}>
        <button 
           className="bg-primary text-white px-3 rounded-md font-palanquin font-semibold flex items-center gap-1 py-1"
       
        onClick={()=>{
          props.onBackSlide()
        }}
        >Back</button>
        <button className="bg-light-purple text-dark-purple px-3 rounded-md font-palanquin font-semibold flex items-center gap-1 py-1"
        onClick={()=>{
          props.onNextSlide()
        }}
        >Next</button>
      </div>
      {/* <div style={{padding:"24px"}}>
      <div style={{fontWeight:"bold",fontSize:"28px"}}>MCQs Test Exam - Module 1</div>
      <div
      style={{fontSize:"15px",color:"grey",marginTop:"12px"}}>Lorem culpa quis non minim mollit amet commodo veniam ea proident consectetur.</div>
      <div style={{display:"flex"}}><span style={{fontSize:"18px",fontWeight:"bold"}}>Duration: &nbsp;</span><span>20Min</span></div>
      <div style={{display:"flex"}}><span style={{fontSize:"18px",fontWeight:"bold"}}>MCQs: &nbsp;</span><span>20</span></div>
      <button style={{color:"white",background:"green",padding:"8px 16px",border:"none",borderRadius:"6px",fontSize:"12px",cursor:"pointer",marginTop:"10px"}}>Active</button>
      </div> */}
    </div>
  )

}

function SideBar(props) {
  return (
    <div className="border-primary border border-l-0 border-t-0 border-b-0 " style={{ padding: '0px 16px', overflow: 'auto', minWidth: '300px', maxWidth: '300px', height: '98%', display: 'flow', marginBottom: '16px', paddingTop: '16px' }}>
      <p className="text-light-gray font-montserrat text-sm font-semibold my-4">
          MODULES
        </p>
      {props.moduleObject.map((d, i) => (
        <div onClick={()=>{
          props.onChangeSlide(i)
        }} key={i} 
        className={`text-white text-[15px] font-semibold flex  py-2 px-4 my-2 -mx-1 rounded-[12px] hover:bg-mid-purple cursor-pointer ${
          props.currentModule === i ? "border border-primary bg-mid-purple" : ""
        }`}
        // style={{ cursor: 'pointer', display: 'flex', justifyContent: 'row', padding: '8px', background: 'white', borderRadius: '8px', alignItems: 'center', margin: '8px', marginBottom: '16px' }}
        >
           <span className="text-light-gray">{i + 1}. </span>
          <span style={{ marginLeft: '6px' }}>{d.module}</span>
        </div>
      ))}
      <div className=" h-7"></div>
    </div>
  );
}

function NavBar(params) {
  return (
    <div className="bg-mid-purple text-white border-primary border border-l-0 border-t-0 border-r-0"  style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      justifyItems: "baseline",
      padding: "7.5px 16px"
    }}>
      <span style={{ display: "flex", justifyContent: "row", alignItems: "center" }}>
        <RxCross1 style={{ fontSize: "20px" , cursor: 'pointer' }} />
        <span style={{ marginLeft: "12px", fontSize: "18px", textAlign: "" }}>Use Kotlin Coroutines in your Android App</span>
      </span>
      <div className="flex gap-2 items-center">
        <div className="flex gap-1.5 border rounded-md px-4 py-1
        border-primary justify-center items-center hover:bg-primary cursor-pointer">
          <span className="text-sm">5</span>
          <GoHeartFill className="text-red-500" />
        </div>
        <button className="bg-purple px-3 rounded-md font-palanquin font-semibold flex items-center gap-1 py-1">
            Get App <FaLocationArrow className="text-xs mt-0.5" />
        </button>
        
        <CgProfile className="text-3xl ml-2" />
      
      </div>
      
        </div>
  )
}


export default CourseModule;