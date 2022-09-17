import sagaTypeConstants from "../shared/constants/sagaTypes";
import { takeLatest } from "redux-saga/effects";
import { userSignupSaga } from "./sagas/userSaga";


export default function* actionWatcher() {
  yield takeLatest(sagaTypeConstants.SAGA_TYPE_USER_SIGNUP, userSignupSaga);
}
