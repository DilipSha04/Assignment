import React from "react";
import "../App.css";

function Navbar() {
  const navLink = ["Home", "About Us", "Services", "Contact"];

  return (
    <div className="flex justify-between items-center w-full h-[4rem] border border-b-1 border-black border-opacity-45 fixed overflow-hidden z-10">
      <h1 className="ml-[4rem] text-[30px] font-bold font-[Limelight]">
        LizMotors
        <span className="text-[30px]  font-bold text-orange-500">.</span>
      </h1>
      <ul className="flex justify-between mr-[4rem]">
        {navLink.map((navLink, index) => (
          <li
            key={index}
            className=" mx-[1rem] px-2 py-1 font-[20px] font-[Snippet] hover:bg-orange-500 hover:rounded-r-3xl hover:text-white transition-all duration-150 "
          >
            {navLink}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
