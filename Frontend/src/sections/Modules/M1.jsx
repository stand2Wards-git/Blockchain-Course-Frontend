import React, { useContext } from "react";
import Modal from "react-modal";
import {
  BLborder,
  BRborder,
  TLborder,
  TRborder,
} from "../../components/Borders";
import ModuleCard from "../../components/ModuleCard";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import UserContext from "../../context/userDetail/UserContext";
import Loading from "../../globle/Loading";

const M1 = ({ moduleIndex: moduleIndex }) => {
  const [CD, setCD] = useState(null);
  const [lessonIndex, setLessonIndex] = useState(2);
  const handleLessonIndex = (i) => setLessonIndex(i);

  const userDetail = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/modules/kishanvyas309@gmail.com`);
        const data = await response.json();
        console.log(data)
        setCD(data);
        // console.log(CD.module1.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let topics = null;
  let i = 0;
  let selected = false;
  let selectedIndex = 0;

  return (
    <>
      {CD ? (
        <div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-6 py-8 mb-10">
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                <div></div>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.1`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.1`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.1`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.1`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(1), handleOpen();
                  }}
                />
                <TRborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.1`]
                      .completed
                  }
                />
              </>
            ) : (
              <></>
            )}

            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.2`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <div></div>
                <div></div>
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.2`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.2`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.2`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(2), handleOpen();
                  }}
                />
              </>
            ) : (
              <></>
            )}

            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.3`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <TLborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.3`]
                      .completed
                  }
                ></TLborder>
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.3`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.3`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.3`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(3), handleOpen();
                  }}
                />
                <BRborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.2`]
                      .completed
                  }
                />
              </>
            ) : (
              <></>
            )}

            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.4`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.4`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.4`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.4`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(4), handleOpen();
                  }}
                />
                <div></div>
                <div></div>
              </>
            ) : (
              <></>
            )}

            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.5`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <BLborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.4`]
                      .completed
                  }
                />
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.5`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.5`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.5`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(5), handleOpen();
                  }}
                />
                <TRborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.5`]
                      .completed
                  }
                />
              </>
            ) : (
              <></>
            )}
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.6`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <div></div>
                <div></div>
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.6`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.6`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.6`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(6), handleOpen();
                  }}
                />
              </>
            ) : (
              <></>
            )}
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.7`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}
                <TLborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.7`]
                      .completed
                  }
                ></TLborder>
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.7`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.7`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.7`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(7), handleOpen();
                  }}
                />
                <BRborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.6`]
                      .completed
                  }
                ></BRborder>
              </>
            ) : (
              <></>
            )}
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.8`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.8`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.8`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.8`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(8), handleOpen();
                  }}
                />
                <div></div>
                <div></div>
              </>
            ) : (
              <></>
            )}
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.9`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <BLborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.8`]
                      .completed
                  }
                />
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.9`].title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.9`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.9`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(9), handleOpen();
                  }}
                />
                <TRborder
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.9`]
                      .completed
                  }
                />
              </>
            ) : (
              <></>
            )}
            {++i <= CD[`module${moduleIndex}`].totalLessons ? (
              <>
                {!CD[`module${moduleIndex}`].lessons[`${moduleIndex}.10`]
                  .completed && selectedIndex++ === 0
                  ? (selected = true)
                  : (selected = false)}

                <div></div>
                <div></div>
                <ModuleCard
                  title={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.10`]
                      .title
                  }
                  type={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.10`].type
                  }
                  done={
                    CD[`module${moduleIndex}`].lessons[`${moduleIndex}.10`]
                      .completed
                  }
                  selected={selected}
                  onClick={() => {
                    handleLessonIndex(10), handleOpen();
                  }}
                />
              </>
            ) : (
              <></>
            )}

            {/* Modal component */}
          </div>
      
        </div>
      ) : (
        <Loading />
      )}
      {open === true ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-dark-purple py-6 px-8 rounded-2xl shadow-lg text-white">
            <div className="flex justify-between">
              <p className="font-palanquin">
                {
                  CD[`module${moduleIndex}`].lessons[
                    `${moduleIndex}.${lessonIndex}`
                  ].type
                }
              </p>
              <IoClose
                className="text-[28px] -mb-3 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <p className="font-bold text-xl my-2 font-montserrat">
              {
                CD[`module${moduleIndex}`].lessons[
                  `${moduleIndex}.${lessonIndex}`
                ].title
              }
            </p>
            <p className="text-lg max-w-[400px] font-palanquin mb-6">
              Tefefei fihihe9 fhefhfehf iehfehfue hfehfuefufefefhwuhuggghis is a
              simple dialog box example.
            </p>

            {CD[`module${moduleIndex}`].lessons[
              `${moduleIndex}.${lessonIndex}`
            ].topics.map((topic, index) => (
              <Link to={topic.name === "Quiz" ? "/exam" : "/coursemodule"}>
                {
                  topic.completed ? <div
                  key={index}
                  className="flex text-black justify-between items-center font-palanquin p-3 mx-1 my-2.5 border-2 border-purple bg-light-purple rounded-lg  "
                >
                  <span>{topic.name}</span>

                  <FaCheck className="text-purple text-[22px]"/>
                </div> :
                <div
                key={index}
                className="flex justify-between items-center p-3 my-2.5 mx-1 font-palanquin border-2 border-purple rounded-lg hover:bg-mid-purple "
              >
                <span>{topic.name}</span>

                
              </div>
                 
                }
                
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

// const DialogBox = ({ isOpen, onClose }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose} className="dialog-box">
//       <h2>Dialog Box</h2>
//       <p>This is a dialog box opened from a ModuleCard.</p>
//       <button onClick={onClose}>Close</button>
//     </Modal>
//   );
// };

export default M1;
