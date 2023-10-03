import React, { useState } from "react";

import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardSidebar from "./DashboardSidebar";

const DashboardTopbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between pl-3 mb-8">
        <div className="flex items-center flex-1 gap-x-10">
          <Link to="/" className="inline-block">
            <img srcSet="/logo.png 2x" alt="crowdfunding-app" />
          </Link>
          <div className="lg:block max-w-[458px] w-full">
            <DashboardSearch></DashboardSearch>
          </div>
          <button
            type="button"
            className={`inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
              isMobileMenuOpen ? "open" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-end flex-1 hidden lg:flex gap-x-10"
          id="mobile-menu-2"
        >
          <DashboardFund></DashboardFund>
          <Button
            className="px-7"
            type="button"
            kind="secondary"
            href="/start-campaign"
          >
            Start a campaign
          </Button>
          {user ? (
            <h3>{user.name} </h3>
          ) : (
            <Button className="px-5" type="button" kind="ghost" href="/sign-in">
              Sign in
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state. */}
      <div
        className={`bg-white items-center justify-end flex flex-col ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <DashboardSidebar isMobile={isMobileMenuOpen}>
          <Button
            className="w-full px-7"
            type="button"
            kind="secondary"
            href="/start-campaign"
          >
            Start a campaign
          </Button>
          {user ? (
            <h3>{user.name} </h3>
          ) : (
            <Button
              className="w-full px-7"
              type="button"
              kind="ghost"
              href="/sign-in"
            >
              Sign in
            </Button>
          )}
        </DashboardSidebar>
      </div>
    </>
  );
};

export default DashboardTopbar;
