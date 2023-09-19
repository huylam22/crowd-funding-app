import React, { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import Modal from "react-modal";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));

const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Suspense>
        <Routes key={location.pathname} location={location}>
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path="/campaign"
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              path="/start-campaign"
              element={<StartCampaignPage></StartCampaignPage>}
            ></Route>
            <Route
              path="/campaign/:slug"
              element={<CampaignView></CampaignView>}
            ></Route>
            <Route path="*" element={<div>Not Found</div>}></Route>
          </Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
