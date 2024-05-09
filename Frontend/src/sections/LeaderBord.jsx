import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import Lottie from "react-lottie";
import animationData from "./cele_lot.json";


const usersAlltime = [
  {
    id: 1,
    url: "https://cataas.com/cat",
    name: "Whiskers",
    token: 10000,
  },
  {
    id: 2,
    url: "https://cataas.com/cat",
    name: "Snowball",
    token: 9000,
  },
  {
    id: 3,
    url: "https://cataas.com/cat",
    name: "Mittens",
    token: 8000,
  },
  {
    id: 4,
    url: "https://cataas.com/cat",
    name: "Tiger",
    token: 7000,
  },
  {
    id: 5,
    url: "https://cataas.com/cat",
    name: "Whiskers Jr.",
    token: 6000,
  },
  {
    id: 6,
    url: "https://cataas.com/cat",
    name: "Fluffy",
    token: 5000,
  },
  {
    id: 10,
    url: "https://cataas.com/cat",
    name: "Max",
    token: 1000,
  },
  {
    id: 11,
    url: "https://cataas.com/cat",
    name: "Simba",
    token: 1000,
  },
  {
    id: 12,
    url: "https://cataas.com/cat",
    name: "Garfield",
    token: 1000,
  },
  {
    id: 8,
    url: "https://cataas.com/cat",
    name: "Muffin",
    token: 300,
  },
  {
    id: 9,
    url: "https://cataas.com/cat",
    name: "Whiskers Sr.",
    token: 200,
  },
  {
    id: 10,
    url: "https://cataas.com/cat",
    name: "Max",
    token: 100,
  },
];

const Leaderboard = () => {
  // Dummy data for the leaderboard
  const users24h = [
    {
      id: 1,
      url: "https://cataas.com/cat",
      name: "Whiskers",
      token: 1000,
    },
    {
      id: 2,
      url: "https://cataas.com/cat",
      name: "Snowball",
      token: 900,
    },
    {
      id: 3,
      url: "https://cataas.com/cat",
      name: "Mittens",
      token: 800,
    },
    {
      id: 4,
      url: "https://cataas.com/cat",
      name: "Tiger",
      token: 700,
    },
    {
      id: 5,
      url: "https://cataas.com/cat",
      name: "Whiskers Jr.",
      token: 600,
    },
    {
      id: 6,
      url: "https://cataas.com/cat",
      name: "Fluffy",
      token: 500,
    },
    {
      id: 7,
      url: "https://cataas.com/cat",
      name: "Snuggles",
      token: 400,
    },
    {
      id: 8,
      url: "https://cataas.com/cat",
      name: "Muffin",
      token: 300,
    },
    {
      id: 9,
      url: "https://cataas.com/cat",
      name: "Whiskers Sr.",
      token: 200,
    },
    {
      id: 10,
      url: "https://cataas.com/cat",
      name: "Max",
      token: 100,
    },
    {
      id: 11,
      url: "https://cataas.com/cat",
      name: "Simba",
      token: 100,
    },
    {
      id: 12,
      url: "https://cataas.com/cat",
      name: "Garfield",
      token: 100,
    },
  ];
  
  
    const [open, setOpen] = useState(false);
    const [user, setuser] = useState("users24h");
    const handleOpen = (v) => {
      setOpen(true);
      setuser(v);
    };
  
    const handleClose = () => setOpen(false);
    const [opendIndex, setOpenedIndex] = useState(0);


  return (
    <section className="bg-dark-purple w-full min-h-[100vh] flex  flex-col ">
      <Nav />
      <div className="flex flex-1 mt-[48px] mx-6 xl:flex-row flex-col ">
      <div className="flex-1 h-[calc(100vh-100px)]  flex flex-col m-6 border-4 border-primary hover:border-light-purple rounded-3xl">
          <div className=" px-6 my-5 ml-1 text-[16px] justify-center text-white font-montserrat flex items-center font-semibold gap-1">
            <MdLeaderboard className="mr-2 -mt-1 text-light-purple text-[24px]" />{" "}
            <span>TOP USERS BY</span>
            <span className="text-light-purple">ALL-TIME </span>
            <span>TOKEN</span>
          </div>
          <div className="w-[90%] border-y ml-[5%] border-mid-purple -mt-1"></div>
          <div className="flex-1 my-4 px-6 text-light-gray ">
            <div className="flex w-full mb-4">
              <span className="w-[20%]"></span>
              <span className="w-[60%]">Name</span>
              <span className="w-[20%]">Token</span>
            </div>
            <div
              className="h-[calc(100vh-242px)] overflow-y-auto "
              style={{ scrollbarWidth: "none" }}
            >
              <LeadingPannel handleOpen={handleOpen} setOpenedIndex={setOpenedIndex}/>
              {usersAlltime.filter(user => user.id > 3).map((user, index) => (
                <div
                  key={index}
                  className={`flex w-[98%] items-center py-1.5 px-4 my-2 m-1 ${
                    index % 2 === 1 ? "bg-mid-purple" : ""
                  } rounded-lg hover:bg-primary cursor-pointer hover:text-white`}
                  onClick={() => {
                    handleOpen("users24h"), setOpenedIndex(index);
                  }}
                >
                  <span className="w-[8%] pl-2">{index + 4}.</span>
                  <div className="flex w-[72%] items-center">
                    <img
                      className="h-11 w-11  object-cover rounded-full border-2 border-primary"
                      src={user.url}
                      alt="png"
                    />
                    <span className="ml-2 text-white">{user.name}</span>
                  </div>
                  <span className="w-[20%]">{user.token} TC</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      
        <div className="flex-1 h-[calc(100vh-100px)] flex flex-col m-6 border-4 border-primary hover:border-light-purple rounded-3xl">
          <div className=" px-6 my-5 ml-1 text-[16px] justify-center text-white font-montserrat flex items-center font-semibold gap-1">
            <MdLeaderboard className="mr-2 -mt-1 text-light-purple text-[24px]" />{" "}
            <span>TOP USERS BY</span>
            <span className="text-light-purple">24H </span>
            <span>TOKEN</span>
          </div>
          <div className="w-[90%] border-y ml-[5%] border-mid-purple -mt-1"></div>
          <div className="flex-1 my-4 px-6 text-light-gray ">
            <div className="flex w-full mb-4">
              <span className="w-[20%]"></span>
              <span className="w-[60%]">Name</span>
              <span className="w-[20%]">Token</span>
            </div>
            <div
              className="h-[calc(100vh-242px)] overflow-y-auto "
              style={{ scrollbarWidth: "none" }}
            >
              {users24h.map((user, index) => (
                <div
                  key={index}
                  className={`flex w-[98%] items-center py-1.5 px-4 my-2 m-1 ${
                    index % 2 === 1 ? "bg-mid-purple" : ""
                  } rounded-lg hover:bg-primary cursor-pointer hover:text-white`}
                  onClick={() => {
                    handleOpen("usersAlltime"), setOpenedIndex(index);
                  }}
                >
                  <span className="w-[8%] pl-2">{index + 1}.</span>
                  <div className="flex w-[72%] items-center">
                    <img
                      className="h-11 w-11  object-cover rounded-full border-2 border-primary"
                      src={user.url}
                      alt="png"
                    />
                    <span className="ml-2 text-white">{user.name}</span>
                  </div>
                  <span className="w-[20%]">{user.token} TC</span>
                </div>
              ))}
            </div>
          </div>
        </div>
       
        {/* <div className="flex-1 h-[calc(100vh-100px)] flex m-6 border-4 border-primary hover:border-light-purple rounded-3xl"></div> */}
      </div>
      {open === true ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          {user === "users24h" ? (
            <div className="bg-dark-purple p-6 rounded-2xl shadow-lg text-white flex border-2 border-primary">
              <div>
                <img
                  src={usersAlltime[opendIndex].url}
                  className="w-[120px] h-[120px] border-2 border-primary object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex-1 m-2 mx-4 max-w-[200px] w-[200px]">
                <p className="text-white text-[18px] font-montserrat">
                  {usersAlltime[opendIndex].name}
                </p>
                <div className=" mx-1 text-light-gray font-palanquin">
                  <span className="text-light-purple">
                    {usersAlltime[opendIndex].token}
                  </span>
                  <span className="ml-1">Token</span>
                </div>
              </div>
              <div>
                <IoClose
                  className="text-[24px] cursor-pointer"
                  onClick={() => {
                    handleClose();
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="bg-dark-purple p-6 rounded-2xl shadow-lg text-white flex border-2 border-primary">
              <div>
                <img
                  src={users24h[opendIndex].url}
                  className="w-[120px] h-[120px] border-2 border-primary object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex-1 m-2 mx-4 max-w-[200px] w-[200px]">
                <p className="text-white text-[18px] font-montserrat">
                  {users24h[opendIndex].name}
                </p>
                <div className=" mx-1 text-light-gray font-palanquin">
                  <span className="text-light-purple">
                    {users24h[opendIndex].token}
                  </span>
                  <span className="ml-1">Token</span>
                </div>
              </div>
              <div>
                <IoClose
                  className="text-[24px] cursor-pointer"
                  onClick={() => {
                    handleClose();
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Leaderboard;

function LeadingPannel(params) {
  const containerStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Replace with your Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    backgroundColor: "#0C359E",
  };

  const roundedImageContainerStyle = {
    position: "relative",
    display: "inline-block",
    borderRadius: "50%",
    overflow: "visible",
    // You can change the border color
  };

  const numberStyle = {
    position: "absolute",
    bottom: "-5px", // Adjust this value to move the number downward
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333", // Same as the border color
    borderRadius: "50%",
    padding: "5px 10px",
    color: "#fff",
    zIndex: "100",
    // You can change the text color
  };
  return (
    <>
      <div
        style={{
          
          margin: "auto",
          position: "relative",
          padding: "16px 16px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "end",
            zIndex: '5'
          }}
        >
          <div style={containerStyle} className="z-10" >
            <FaCrown style={{ fontSize: "20px", color: "#40A2D8" }} />
            <div style={roundedImageContainerStyle} >
              <img
                src={usersAlltime[1].url}
                alt="Your Image"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "4px solid #40A2D8",
                  cursor: 'pointer'
                }}
                onClick={() => {
                    params.handleOpen("usersAlltime"); params.setOpenedIndex(1);
                  }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#40A2D8", // Same as the border color
                  borderRadius: "50%",
                  padding: "5px 15px",
                  color: "#fff",
                 
                }}
              >
                2
              </div>
            </div>
            <span style={{ color: "white", marginTop: "10px" }}>
              {usersAlltime[1].name}
            </span>
          </div>

          <div style={containerStyle} className="z-10">
            <FaCrown style={{ fontSize: "25px", color: "#FFA447" }} />
            <div style={roundedImageContainerStyle} className="cursor-pointer" onClick={() => {
                    params.handleOpen("usersAlltime"); params.setOpenedIndex(0);
                  }}>
              <img
                src={usersAlltime[0].url}
                alt="Your Image"
                style={{
                  width: "125px",
                  height: "125px",
                  borderRadius: "50%",
                  border: "4px solid #FFA447",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#FFA447", // Same as the border color
                  borderRadius: "50%",
                  padding: "5px 15px",
                  color: "black",
                  zIndex: "100",
                }}
              >
                1
              </div>
            </div>
            <span style={{ color: "white", marginTop: "10px" }}>
            {usersAlltime[0].name}
            </span>
          </div>

          <div style={containerStyle} className="z-10">
            <FaCrown style={{ fontSize: "15px", color: "#D63484" }} />
            <div style={roundedImageContainerStyle} className="cursor-pointer" onClick={() => {
                    params.handleOpen("usersAlltime"); params.setOpenedIndex(2);
                  }}>
              <img
                src={usersAlltime[2].url}
                alt="Your Image"
                style={{
                  width: "85px",
                  height: "85px",
                  borderRadius: "50%",
                  border: "4px solid #D63484",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-5px", // Adjust this value to move the number downward
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#D63484", // Same as the border color
                  borderRadius: "50%",
                  padding: "5px 15px",
                  color: "#fff",
                  zIndex: "100",
                }}
              >
                3
              </div>
            </div>
            <span style={{ color: "white", marginTop: "10px" }}>
            {usersAlltime[2].name}
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            top: "0",
            left: "0",
            right: "0",
            margin: "auto",
            zIndex: "0",
          }}
        >
          <Lottie options={lottieOptions} height="100%" width="100%" />
        </div>
      </div>
    </>
  );
}
