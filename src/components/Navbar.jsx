import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen font-poppins flex flex-row gap-3 py-3 text-white bg-black justify-center text-[15px] fixed lg:h-[60px] items-center">
      <a href="" className="text-[15px] lg:text-[20px]">
        Home
      </a>
      <a href="" className="text-[15px] lg:text-[20px]">
        Workspace
      </a>
      <a href="" className="text-[15px] lg:text-[20px]">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
