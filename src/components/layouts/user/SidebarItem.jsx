import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const { pathname } = useLocation();

  const classname =
    "flex flex-row items-center gap-3 w-full text-[#4F5B67] p-3 hover:bg-[#F7F7FB] hover:text-[#0D0D54]";

  return (
    <Link asChild to={item.path}>
      <div
        asChild
        className={clsx(
          pathname === item.path
            ? "bg-[#F7F7FB] text-[#0D0D54] flex items-center gap-3 w-full p-3  border-r-2 border-r-[#0D0D54]"
            : classname
        )}
      >
        {item.icon}
        {item.title}
      </div>
    </Link>
  );
};

export default SidebarItem;
