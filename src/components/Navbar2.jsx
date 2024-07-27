import React from "react";
import logo from "../assets/logo.png";

const Navbar2 = () => {
  return (
    <div className="w-screen font-poppins flex flex-row py-3 gap-2 text-white bg-black justify-center text-[15px] fixed lg:h-[60px] items-center lg:text-[20px]">
      <img src={logo} alt="Hizkia Yogi Rafael" className="w-[30px]" />
      <h1>RafaelNetwork.</h1>
    </div>
  );
};

export default Navbar2;
