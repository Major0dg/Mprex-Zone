import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div>
        <Sidebar />
      </div>
      <div className="p-4">
        <div>{/* <Header /> */}</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
