import React from "react";
import { BsCart } from "react-icons/bs";
import { profile } from "../assets/Index";

const Dashboard = () => {
  return (
    <>
      {" "}
      <nav className="w-full md:w-fit ml-auto text-red-600 h-22 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className="max-w-screen-xl h-full mx-auto flex flex-row content-end items-end justify-between">
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
              className="h-7 w-8 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div className="mb-auto">checking status</div>
    </>
  );
};

export default Dashboard;
