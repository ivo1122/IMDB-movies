import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbar
          ? " flex items-center justify-between p-4 z-[100] w-full h-200px fixed bg-[#3b3c36] duration-1000 "
          : "flex items-center justify-between p-4 z-[100] w-full h-200px fixed "
      }
    >
      <div className="flex items-center justify-center ml-6">
        <h3 className="text-white pr-4">Homepage</h3>
        <h4 className="text-white pr-4">Movies</h4>
        <h4 className="text-white pr-4">New and popular</h4>
        <h4 className="text-white pr-4">My list</h4>
      </div>

      <div>
        <button className="text-white pr-4 ">Sign in</button>
        <button className="bg-gray-600 px-6 py-2 rounded cursor-pointer text-white">
          {" "}
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
