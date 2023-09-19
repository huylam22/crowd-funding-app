import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Create new account successfully!");
    }
    console.log(response);
  } catch (error) {
    toast.error(error);
  }
  yield 1;
}

function* handleAuthLogin(action) {
  console.log("handleAuthLogin", action);
  try {
    const response = yield call(requestAuthLogin, action.payload);
    toast.success("Login successfully!");
  } catch (error) {
    toast.error(error);
  }
  yield 1;
}

export { handleAuthLogin };
