import Overlay from "components/common/Overlay";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import { Button } from "components/button";
import CampaignPerk from "modules/campaign/CampaignPerk";
import RequiredAuthPage from "pages/RequiredAuthPage";

const LayoutDashboard = ({ children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="p-6 lg:min-h-screen lg:p-10 bg-lite">
        <Overlay></Overlay>
        <div className="flex flex-col">
          <DashboardTopbar></DashboardTopbar>
          <div>
            <div className="flex items-start gap-x-10">
              <DashboardSidebar></DashboardSidebar>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Outlet></Outlet>
              </motion.div>
            </div>

            {/* <div className="flex-1">{children}</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
