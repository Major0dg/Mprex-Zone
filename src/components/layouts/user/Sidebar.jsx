import React from "react";
import { Link } from "react-router-dom";
import {
  USER_ACTION_BUTTONS,
  USER_SIDEBAR_LINKS,
} from "../../../lib/constants";
import SidebarItem from "./SidebarItem";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const logout = () => {};
  return (
    <div className="flex flex-col w-60 items-center py-3 border-r border h-full">
      {/* logo */}
      <div>
        <Link to="/">
          <h1 className="text-center font-bold text-2xl text-[#0D0D54]">
            Investly.
          </h1>
        </Link>
      </div>

      {/* routes */}

      <div className="flex flex-col space-y-3 mt-10 w-full">
        {USER_SIDEBAR_LINKS.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>

      {/* cta */}
      <div className="flex flex-col space-y-3 mt-auto w-full">
        {USER_ACTION_BUTTONS.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}

        <div
          className="flex gap-3 items-center p-3 cursor-pointer text-rose-600"
          onClick={logout}
        >
          <MdLogout />
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
