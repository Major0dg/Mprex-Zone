import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col min-h-[100vh]">
        <div className=" border border-b shadow-sm px-4 py-6">
          <Header />
        </div>
        <div className="h-full p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
