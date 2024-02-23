import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { profile } from "../../../assets/Index";

const Header = () => {
  return (
    <nav className="flex justify-between items-center ">
      {/* search box */}
      <div className="px-2 py-4 flex gap-2 border rounded-md items-center w-full max-w-[50%]">
        <BsSearch className="bg-[#0D0D54] p-1 rounded-md text-white w-7 h-7" />
        <input
          placeholder="Search products here...."
          className="w-full outline-none border-none"
        />
      </div>
      <div className=" flex flex-row items-center justify-between mr-4 w-auto">
        <ul className="flex items-end justify-end gap-8">
          <li className="nav-li">Home</li>
          <li className="nav-li">Pages</li>
          <li className="nav-li">Shop</li>
          <li className="nav-li">Element</li>
          <li className="nav-li">Blog</li>
        </ul>
        <div className="flex items-center pl-6 gap-8">
          <div className="cursor-pointer">
            <BsCart size={22} color="pink" />
          </div>
          <img
            src={profile}
            alt="profile-img"
            className="h-7 w-8 cursor-pointer mr-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
