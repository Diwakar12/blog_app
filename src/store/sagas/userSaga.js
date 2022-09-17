import { call, put } from "redux-saga/effects";
import { userSignUp } from "../actions/userActions";
import actionTypeConstants from "../../shared/constants/actionTypes";

export function* userSignupSaga(payload) { 
  debugger 
  try {
    const userDetail = yield call(userSignUp, payload.users);  
    yield put({ type: actionTypeConstants.ACTION_TYPE_USER_SIGNUP, userDetails: userDetail.user });
  } catch (error) {
    if (error.response.data.success===false && error.response.status === 400) {
      const errorMsg = error.response.data.message;      
      yield put({ type: actionTypeConstants.ACTION_TYPE_USER_SIGN_UP_ERROR_UPDATE, errorData: errorMsg });
     
    }
  }
}