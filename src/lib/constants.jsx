import {
  MdBusiness,
  MdHelpOutline,
  MdOutlineContentCopy,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdShare,
  MdSpaceDashboard,
} from "react-icons/md";
import { LuClock, LuShieldCheck } from "react-icons/lu";

export const SIDEBAR_LINKS = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: "Available units",
    path: "/available-units",
    icon: <MdBusiness />,
  },
  {
    id: 3,
    title: "Invoices",
    path: "/invoices",
    icon: <LuShieldCheck />,
  },
  {
    id: 4,
    title: "Projects",
    path: "/projects",
    icon: <LuClock />,
  },
  {
    id: 5,
    title: "Social media",
    path: "/social-media",
    icon: <MdShare />,
  },
  {
    id: 6,
    title: "Integrations",
    path: "/integration",
    icon: <MdOutlineDashboard />,
  },
  {
    id: 7,
    title: "Documentation",
    path: "/documentation",
    icon: <MdOutlineContentCopy />,
  },
];

export const ACTION_BUTTONS = [
  {
    id: 1,
    title: "Settings",
    path: "/settings",
    icon: <MdOutlineSettings />,
  },
  {
    id: 2,
    title: "Help center",
    path: "help-center",
    icon: <MdHelpOutline />,
  },
];
