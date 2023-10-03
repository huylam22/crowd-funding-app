import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { getToken, logOut, saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success(
        "Create new account successfully! Please go to sign-in page"
      );
    }
    console.log(response);
  } catch (error) {
    toast.error(error);
  }
  yield 1;
}

function* handleAuthLogin(action) {
  try {
    const response = yield call(requestAuthLogin, action.payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
    toast.success("Login successfully!");
  } catch (error) {
    // console.log(error.response.data.error.message);
    toast.error(error.response.data.error.message);
  }
  yield 1;
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(authUpdateUser({ user: response.data, accessToken: payload }));
    } else {
      // const { refresh_token } = getToken();
      // if (refresh_token) {
      //   yield call(handleAuthRefreshToken, { payload: refresh_token });
      // } else {
      //   yield put(authUpdateUser({}));
      // }
    }
    // console.log(response);
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    } else {
      // Log out
    }
  } catch (error) {}
}

function* handleAuthLogout() {
  yield put(authUpdateUser({}));
  logOut();
  toast.success("Logout successfully!");
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogout,
};
