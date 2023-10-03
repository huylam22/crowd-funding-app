import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "store/auth/auth-slice";
import { getToken, logOut } from "utils/auth";
import RequiredAuthPage from "pages/RequiredAuthPage";
import { permissions } from "constants/permissions";
import LayoutPayment from "layout/LayoutPayment";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const UnauthorizePage = lazy(() => import("./pages/UnauthorizePage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));

Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.id) {
      const { access_token } = getToken();

      dispatch(
        authUpdateUser({
          user: user,
          accessToken: access_token,
        })
      );
    } else {
      const { refresh_token } = getToken();
      if (refresh_token) {
        dispatch(authRefreshToken(refresh_token));
      } else {
        dispatch(authUpdateUser({}));
        logOut();
      }
    }
  }, [dispatch, user]);
  return (
    <AnimatePresence initial={false}>
      <Suspense>
        <Routes key={location.pathname} location={location}>
          <Route element={<LayoutDashboard></LayoutDashboard>}>
            <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
            <Route
              path="/payment"
              element={<PaymentPage></PaymentPage>}
            ></Route>
            <Route
              path="/unauthorize"
              element={<UnauthorizePage></UnauthorizePage>}
            ></Route>
            <Route
              path="/campaign"
              element={<CampaignPage></CampaignPage>}
            ></Route>
            <Route
              allowPermissions={[permissions.campaign.CREATE_CAMPAIGN]}
              element={<RequiredAuthPage></RequiredAuthPage>}
            >
              <Route
                path="/start-campaign"
                element={<StartCampaignPage></StartCampaignPage>}
              ></Route>
            </Route>

            <Route
              path="/campaign/:slug"
              element={<CampaignView></CampaignView>}
            ></Route>
            <Route element={<LayoutPayment></LayoutPayment>}>
              <Route
                path="/checkout"
                element={<CheckoutPage></CheckoutPage>}
              ></Route>
              <Route
                path="/shipping-address"
                element={<ShippingPage></ShippingPage>}
              ></Route>
            </Route>
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
