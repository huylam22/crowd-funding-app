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
    onClick: () => {},
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
const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary";
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link, index) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navlinkClass} bg-primary text-primary bg-opacity-20`
              : `${navlinkClass} text-icon-color`
          }
        >
          <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            {link.icon}
          </motion.span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
