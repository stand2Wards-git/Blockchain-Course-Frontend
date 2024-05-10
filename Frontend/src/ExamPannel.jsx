import React,{useState,useEffect} from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Loading from './globle/Loading';


function ExamPannel(params) {

  const [ExamObject,setExamObject] = useState(null)
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [attemptedList,setAttemptedList] = useState([])

  useEffect(() => {
    const fetchModuleData = () => {
      try {
        setTimeout(()=>{
          import('./Exam.json').then(({ default: data }) => {
            setExamObject(data);
          });
        },500)
      } catch (error) {
        console.error("Error fetching module data:", error);
        alert("Something went wrong while fetching module data.");
      }
    };
    fetchModuleData();
  }, []);


 

 
  
  const onNextQue = ()=>{
    if(ExamObject){
      if(currentQuestion < ExamObject.format.length-1){
        setCurrentQuestion(currentQuestion+1)
      }
    }
  }

  const onPreviousQue = ()=>{
    if(ExamObject){
      if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion-1)
      }
    }
  }

  const changeQuestion = (i)=>{
    setCurrentQuestion(i)
  }

  return (
    ExamObject ?
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBarExam numOfQuestions={ ExamObject.format.length} currentQue = {currentQuestion} onNextQue={onNextQue} 
      onPreviousQue={onPreviousQue} 
      attemptedQuestion = {attemptedList}
      onChangeQuestion = {changeQuestion}
      />
      <QuestionAns 
      QuestionObject={ ExamObject.format[currentQuestion]}
      onNextQue={onNextQue}
      />
    </div>
    :<Loading/> 
  )
}


function QuestionAns(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <div className='text-white font-semibold font-montserrat' style={{ fontSize: "20px", marginBottom: "16px" }}>
          {props.QuestionObject.question}
        </div>

        {
          props.QuestionObject.options.map((d,i)=>{
            return (
              <div className='bg-mid-purple text-white font-montserrat hover:bg-primary border border-primary' style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                width: "100%", cursor: "pointer", margin: "8px 0px",
                padding:"8px 0px", borderRadius: "8px"
              }}><span style={{ height:"25px", padding: "1px 2px", borderRadius: "5px", marginLeft:"8px", marginRight:"16px" }}>{i+1}.</span><>{d}</> </div>
            )
          })
        }

        <span onClick={()=>{
          props.onNextQue()
        }} className='bg-purple text-[22px] font-sans items-center flex' style={{ display: "flex", border: "none", alignSelf: "end", color: "white", padding: "12px 16px", borderRadius: "12px", cursor: "pointer", fontSize: "14px", fontWeight: "bold", alignItems: "center" }}>Next <IoArrowForwardOutline className='text-[20px]'/></span>
      </div>
    </div>
  )
}
function NavBarExam(props) {
  return (
    <div className='text-white bg-mid-purple border border-primary border-t-0 border-r-0 border-l-0 border-b-1' style={{ display: "flex", padding: "8px 16px", justifyContent: "space-between", alignItems: "center"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={"/"} >

        <RxCross1 style={{ fontSize: "25px" }} />
        </Link>
        <span className='font-semibold' style={{ marginLeft: "16px" }}>Discovering HTML and tags</span>
      </div>
      <div style={{ width: "60%", display: "flex", alignItems: "center" }}>
        <span onClick={()=>{
          props.onPreviousQue()
        }} style={{cursor:"pointer"}}><MdKeyboardArrowLeft className='text-light-gray' style={{ fontSize: "30px" }} /></span>
        <div style={{ display: "flex", width: "100%" }}>
          {
            Array.from({ length: props.numOfQuestions }, (_, index) => (
                <div key={index} onClick={()=>{
                  props.onChangeQuestion(index)
                }} className={`${index === props.currentQue?"bg-purple":"bg-light-purple"}  `}  style={{ cursor:"pointer", margin: "auto 2px", flex: "1", height: "5px", borderRadius: "50PX" }}>
                  {index === props.currentQue ? <div className='h-[3px] bg-light-gray rounded transform translate-y-2.5 mx-[5%]'></div>
                 : <></>}
                  </div>
              ))
          }
        </div>
        <span onClick={()=>{
          props.onNextQue()
        }} style={{cursor:"pointer"}}><MdKeyboardArrowRight className='text-light-gray' style={{ fontSize: "30px" }} /></span>
      </div>
      <div className='flex items-center gap-2'>
      <span className='text-light-gray' style={{fontSize:"16px"}}>00:20:00</span>
      <div>
        <span className='bg-purple cursor-pointer' style={{ display: "flex", alignItems: "center", color: "white", padding: "8px 16px", borderRadius: "8px" }}>
          <FaFontAwesomeFlag style={{ marginRight: "8px" }} />
          Submit
        </span>
       
      </div>
      </div>
    </div>
  )
}




export default ExamPannel