import React from 'react'
import App from './App.jsx';
import ReactDOM from "react-dom/client";
import UserState from './context/userDetail/UserState.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>
);
