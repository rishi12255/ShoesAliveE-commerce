import React from "react";
import NavBar from "../NavBar/NavBar";
import General from "./Components/General";
import Location from "./Components/Location";
import Password from "./Components/Password";
import DeleteAccount from "./Components/DeleteAccount";

const Setting = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavBar />

      {/* Main content with proper top spacing */}
      <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-8 pt-20 md:pt-24 pb-8">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
