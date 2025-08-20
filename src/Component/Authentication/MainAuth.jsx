import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const MainAuth = () => {
  const prevLogin = localStorage.getItem("prevLogin");
  const [screen, setScreen] = useState(prevLogin ? false : true);

  return (
    <div className="relative h-[100vh] flex justify-center items-center">

      <div
        className="absolute inset-0 bg-[url('./mains.jpg')] bg-cover bg-center filter blur-sm"
      ></div>

      
      <div className="absolute inset-0 bg-black/5"></div>


      <div className="relative w-80 border border-slate-400 rounded-xl shadow-lg shadow-black/50 bg-white/70">
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <Login setScreen={setScreen} />
        )}
      </div>
    </div>
  );
};

export default MainAuth;
