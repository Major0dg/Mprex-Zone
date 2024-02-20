import React from "react";
import { BsCart } from "react-icons/bs";
import { profile } from "../assets/Index";

const Dashboard = () => {
  return (
    <div>
      <nav className="text-red-600 w-full h-22 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
        <div className="max-w-screen-xl h-full mx-auto flex flex-row items-center justify-between">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul className="flex items-center gap-8">
              <li className="nav-li">Home</li>
              <li className="nav-li">Pages</li>
              <li className="nav-li">Shop</li>
              <li className="nav-li">Element</li>
              <li className="nav-li">Blog</li>
            </ul>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="flex flex-row items-center px-8 cursor-pointer">
                <BsCart size={22} color="pink" />
              </div>
              <img
                src={profile}
                alt="profile-img"
                className="h-7 w-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
