import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CourseModule from "./CourseModule.jsx";
import ExamPannel from "./ExamPannel.jsx";
import SignInPage from "./signin.jsx";
import Leaderboard from "./sections/LeaderBord.jsx";
import ChatBot from "./sections/ChatBot.jsx";
import Home from "./Home.jsx";
import UserContext from "./context/userDetail/UserContext.jsx";
import { RecoilRoot } from "recoil";

const App = () => {
  const userDetail = useContext(UserContext);
  function isAuthenticated() {
    if (userDetail.name === "") return false;
    return true;
  }

  const redirectToSignIn = () => <Navigate to="/signin" replace />;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated() ? <Home /> : redirectToSignIn(),
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/coursemodule",
      element: isAuthenticated() ? <CourseModule /> : redirectToSignIn(),
    },
    {
      path: "/exam",
      element: isAuthenticated() ? <ExamPannel /> : redirectToSignIn(),
    },
    {
      path: "/leaderboard",
      element: isAuthenticated() ? <Leaderboard /> : redirectToSignIn(),
    },
    {
      path: "/chatbot",
      element: isAuthenticated() ? <ChatBot /> : redirectToSignIn(),
    },
  ]);
  return (
    <div>
    
        <RouterProvider router={router} />
     
    </div>
  );
};

export default App;
