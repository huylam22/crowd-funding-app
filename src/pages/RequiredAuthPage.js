import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useNavigate,
  redirect,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

const RequiredAuthPage = ({ children, allowPermissions = [] }) => {
  const { user } = useSelector((state) => state.auth);
  const userPermissions = user?.permissions || [];
  // console.log(userPermissions);
  const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/sign-in");
  //   }
  // }, [user]);
  // if (!user || !user.email) return null;
  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return userPermissions.find((p) => allowPermissions?.includes(p)) ||
    allowPermissions.length <= 0 ? (
    <Outlet></Outlet>
  ) : user && user.id ? (
    <Navigate to="/unauthorize" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequiredAuthPage;
