import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/study_lot.json";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
  addNewUserToDoc,
  checkUserExists,

  signInWithGoogle,
  signinEmail,
} from "./backend/backend";
import UserContext from "./context/userDetail/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./backend/firebase";
import { useNavigate } from 'react-router-dom';

const MainContainerStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const RightSignInPartStyle = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  objectFill: "cover",
};

const InputFieldStyle = {
  width: "calc(100% - 32px)",
  padding: "8px",
  width: "100%",
  fontSize: "16px",
  borderRadius: "8px",
  borderColor: "#252746",
  borderWidth: "1.5px",
  outline: "none",
  transition: "border-color 0.3s",
  marginBottom: "24px",
  outline: "2px solid transparent",
};

const ButtonStyle = {
  width: "100%",
  padding: "10px 0px",
  borderRadius: "12px",
  backgroundColor: "#0066ff",
  border: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

function SignInPage() {
  const [isSignIn, setSignIn] = useState(false); // Default is sign in, not register

  const toggleSection = (isL) => {
    setSignIn(isL);
  };

  const LeftSignInPartStyle = {
    width: "450px",
    height: "700px",
    margin: "auto",
    padding: "24px",
    borderRadius: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transform: isSignIn ? "rotateY(180deg)" : "rotateY(0deg)",
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  };

  return (
    <div style={MainContainerStyle} id="MainContainer">
      <div
        style={LeftSignInPartStyle}
        className="bg-primary"
        id="MainLeftContainer"
      >
        {!isSignIn ? (
          <MainRegisterSection toggleSection={toggleSection} />
        ) : (
          <MainLoginSection toggleSection={toggleSection} />
        )}
      </div>

      <div className="max-w-[50%] " style={RightSignInPartStyle}>
        <LottieAnimation />
      </div>
    </div>
  );
}

const LottieAnimation = () => {
  return <Lottie animationData={animationData} loop autoplay />;
};

const MainLoginSection = (promps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetail = useContext(UserContext);
  const navigate = useNavigate();

  async function googleSignin() {
    let user = await signInWithGoogle();
    userDetail.setName(user.name);
    userDetail.setPhoto(user.photo);
    userDetail.setEmail(user.email);
    navigate("/");
    console.log("google sign up")
  }
  return (
    <div
      className="MainLeftLogin h-[700px] text-white"
      style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
    >
      <div className="headerImage"></div>
      <div className="flex justify-center items-center flex-col w-100%">
        <div className="text-[24px] font-montserrat font-semibold">
          Sign in to your account
        </div>
        <div
          className="guestRow"
          style={{
            display: "flex",
            justifyContent: "row",
            marginBottom: "52px",
          }}
        >
          <div
            className="text-light-gray ml-1.5 mt-3"
            style={{ fontSize: "15px" }}
          >
            Without Sign In ?{" "}
          </div>
          <div
            className="text-white ml-3 mt-3"
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Enter as Guest!
          </div>
        </div>
      </div>

      <div className="mx-3 mt-3">
        <div
          className="font-palanquin"
          style={{ fontSize: "15px", marginBottom: "3px" }}
        >
          Enter an Email address
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="focus:bg-dark-purple bg-mid-purple focus:ring-2 ring-purple"
          style={InputFieldStyle}
        />
        <div
          className="font-palanquin"
          style={{ fontSize: "15px", marginBottom: "3px" }}
        >
          Enter a Password
        </div>
        <input
          type="password"
          className="focus:bg-dark-purple bg-mid-purple focus:ring-2 ring-purple"
          style={InputFieldStyle}
        />
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              display: "flex",
              margin: "0 5px",
              justifyContent: "row",
              alignItems: "center",
            }}
          >
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>{" "}
          </span>
        </div>
        <button
          className="bg-purple p-3 hover:ring-2 ring-light-purple text-white rounded-xl font-palanquin w-full font-semibold flex items-center justify-center gap-1 "
          onClick={() => {
            signinEmail(email, password);
          }}
        >
          Sign In
        </button>{" "}
      </div>
      <div
        className="text-light-gray"
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "63px",
          marginBottom: "63px",
        }}
      >
        Or Continue With
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "row",
          margin: "0px 5px 0px 5px",
        }}
      >
        <button className="flex-1 border-2 justify-center items-center flex hover:bg-mid-purple border-purple bg-dark-purple rounded-lg py-2 mx-2" onClick={() => {googleSignin()}}>
          <FcGoogle className="text-[20px] mr-2" />
          <span className="mr-2">Google</span>
        </button>
        <button className="flex-1 border-2 justify-center items-center flex hover:bg-mid-purple border-purple bg-dark-purple rounded-lg py-2 mx-2">
          <FaApple className="text-[20px] mr-2" />
          <span className="mr-2">Apple</span>
        </button>
      </div>
      <div
        style={{
          cursor: "pointer",
          textAlign: "center",

          margin: "24px",
        }}
        onClick={() => {
          promps.toggleSection(false);
        }}
      >
        New here, Create an Account ?
      </div>
    </div>
  );
};

const MainRegisterSection = (promps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetail = useContext(UserContext);
  const navigate = useNavigate();

  const [img, setImg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user1.jpg?alt=media&token=787d9a69-6620-4f50-84f1-f96b7e091708"
  );

  const photoOptions = [
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user1.jpg?alt=media&token=787d9a69-6620-4f50-84f1-f96b7e091708",
      label: "Photo 1",
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user2.jpg?alt=media&token=4908e578-d0c3-4953-98c1-8dedcfee17ee",
      label: "Photo 2",
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user3.jpg?alt=media&token=b484c584-bfc5-481e-a2df-d3b9035a9cd5",
      label: "Photo 3",
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user4.jpg?alt=media&token=d69c4896-5346-4d27-9940-075b501ee876",
      label: "Photo 4",
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user5.jpg?alt=media&token=b3306266-f94c-4e9c-a9a2-984ae4ec6ca9",
      label: "Photo 5",
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/web3-drive.appspot.com/o/user6.jpg?alt=media&token=797ab431-ed5d-455e-9b5b-7025515796b3",
      label: "Photo 6",
    },
  ];

  

  const onSubmit = async (e) => {
    const user = await checkUserExists(email);
    if (user != null) {
      console.log("user exeist :", user.email);
      userDetail.setName(user.name);
      userDetail.setPhoto(user.photo);
      userDetail.setEmail(user.email);
      navigate("/");
      return;
    }

    console.log("working");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        console.log("new user created!");
        userDetail.setName(user.name);
        userDetail.setPhoto(user.photo);
        userDetail.setEmail(user.email);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
      await addNewUserToDoc(userName, email, password, img);
  };


  async function googleSignin() {
    let user = await signInWithGoogle();
    userDetail.setName(user.name);
    userDetail.setPhoto(user.photo);
    userDetail.setEmail(user.email);
    navigate("/");
    console.log("google sign up")
  }
  return (
    <div
      className="MainLeftRegister  h-[700px] text-white"
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="headerImage"></div>
      <div className="flex justify-center items-center flex-col w-100%">
        <div className="text-[24px] font-montserrat font-semibold">
          Create your Account
        </div>
        <div
          className="guestRow"
          style={{
            display: "flex",
            justifyContent: "row",
            marginBottom: "52px",
          }}
        >
          <div className="text-light-gray mt-3" style={{ fontSize: "15px" }}>
            Without Create ?{" "}
          </div>
          <div
            className="text-white ml-3 mt-3"
            style={{ fontSize: "15px", cursor: "pointer" }}
          >
            Enter as Guest!
          </div>
        </div>
      </div>

      <div className="mx-3">
        <div
          className="font-palanquin"
          style={{ fontSize: "15px", marginBottom: "3px" }}
        >
          Your Full Name
        </div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="focus:bg-dark-purple bg-mid-purple focus:ring-2 ring-purple"
          style={InputFieldStyle}
        />

        <div
          className="font-palanquin"
          style={{ fontSize: "15px", marginBottom: "3px" }}
        >
          Enter an Email address
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus:bg-dark-purple bg-mid-purple focus:ring-2 ring-purple"
          style={InputFieldStyle}
        />
        <div
          className="font-palanquin"
          style={{ fontSize: "15px", marginBottom: "3px" }}
        >
          Create an secure Password
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus:bg-dark-purple bg-mid-purple focus:ring-2 ring-purple"
          style={InputFieldStyle}
        />
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              display: "flex",
              margin: "0 5px",
              justifyContent: "row",
              alignItems: "center",
            }}
          >
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>{" "}
          </span>
        </div>
        <button
          className="bg-purple p-3 hover:ring-2 ring-light-purple text-white rounded-xl font-palanquin w-full font-semibold flex items-center justify-center gap-1 "
          onClick={() => {
            onSubmit();
          }}
        >
          Register
        </button>
      </div>

      <div
        className="text-light-gray"
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        Or Continue With
      </div>

      <div style={{ display: "flex", justifyContent: "row", margin: "0 5px" }}>
        <button
          className="flex-1 border-2 justify-center items-center flex hover:bg-mid-purple border-purple bg-dark-purple rounded-lg py-2 mx-2"
          onClick={() => {
            googleSignin()
          
          }}
        >
          <FcGoogle className="text-[20px] mr-2" />
          <span className="mr-2">Google</span>
        </button>
        <button className="flex-1 border-2 justify-center items-center flex hover:bg-mid-purple border-purple bg-dark-purple rounded-lg py-2 mx-2">
          <FaApple className="text-[20px] mr-2" />
          <span className="mr-2">Apple</span>
        </button>
      </div>
      <div
        className="text-white"
        style={{
          cursor: "pointer",
          textAlign: "center",

          margin: "24px",
        }}
        onClick={() => {
          promps.toggleSection(true);
        }}
      >
        Already Have an Account ?
      </div>
    </div>
  );
};

export default SignInPage;
