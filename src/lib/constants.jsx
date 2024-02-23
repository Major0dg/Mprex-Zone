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

export const ADMIN_SIDEBAR_LINKS = [
  {
    id: 1,
    title: "Dashboard",
    path: "/admin",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: "Available units",
    path: "/admin/available-units",
    icon: <MdBusiness />,
  },
  {
    id: 3,
    title: "Invoices",
    path: "/admin/invoices",
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

export const ADMIN_ACTION_BUTTONS = [
  {
    id: 1,
    title: "Settings",
    path: "/admin/settings",
    icon: <MdOutlineSettings />,
  },
  {
    id: 2,
    title: "Help center",
    path: "help-center",
    icon: <MdHelpOutline />,
  },
];

export const USER_SIDEBAR_LINKS = [
  {
    id: 1,
    title: "All Products",
    path: "/user",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 2,
    title: "Product-A",
    path: "/user/product-a",
    icon: <MdBusiness />,
  },
  {
    id: 3,
    title: "Product-B",
    path: "/user/product-b",
    icon: <LuShieldCheck />,
  },
  {
    id: 4,
    title: "Product-C",
    path: "/user/product",
    icon: <LuClock />,
  },
  {
    id: 5,
    title: "Social media",
    path: "/user/social-media",
    icon: <MdShare />,
  },
  {
    id: 6,
    title: "Daily News Letter",
    path: "/user/daily-news-letter",
    icon: <MdOutlineDashboard />,
  },
  {
    id: 7,
    title: "Promotion",
    path: "/user/promotion",
    icon: <MdOutlineContentCopy />,
  },
];

export const USER_ACTION_BUTTONS = [
  {
    id: 1,
    title: "Settings",
    path: "/admin/settings",
    icon: <MdOutlineSettings />,
  },
  {
    id: 2,
    title: "Help center",
    path: "help-center",
    icon: <MdHelpOutline />,
  },
];
