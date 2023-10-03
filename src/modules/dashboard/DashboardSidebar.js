import {
  IconCampaign,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
  IconDarkmode,
  IconPlus,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { logOut } from "utils/auth";
import { useDispatch } from "react-redux";
import { authLogOut } from "store/auth/auth-slice";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },

  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconPlus></IconPlus>,
    title: "Start-Campaign",
    url: "/start-campaign",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Ligh/Dark",
    url: "#",
    onClick: () => {},
  },
];
const DashboardSidebar = ({ isMobile, children }) => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary";

  const dispatch = useDispatch();
  return (
    <div
      className={`"md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 lg:flex flex-col flex-shrink-0 ${
        isMobile ? "flex w-full gap-y-4" : "hidden"
      }`}
    >
      {sidebarLinks.map((link, index) => {
        if (link.url === "/logout") {
          return (
            <button
              key={link.title}
              onClick={() => {
                dispatch(authLogOut());
              }}
              className={navlinkClass}
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                {link.icon}
              </motion.span>
              <span className="font-medium md:hidden text-text2">
                {link.title}
              </span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navlinkClass} bg-primary text-primary bg-opacity-20 sm:px-2 sm:py-3 sm:rounded-lg`
                : `${navlinkClass} text-icon-color`
            }
          >
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              {link.icon}
            </motion.span>
            <span className="font-medium md:hidden text-text2">
              {link.title}
            </span>
          </NavLink>
        );
      })}
      {children}
    </div>
  );
};

export default DashboardSidebar;
