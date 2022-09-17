import { call, put } from "redux-saga/effects";
import { getMenuListData } from "../actions/homeActions";
import actionTypeConstants from "../../shared/constants/actionTypes";

export function* getMenuList() {  
  try {
    const menuList = yield call(getMenuListData);  
    yield put({ type: actionTypeConstants.ACTION_TYPE_VENDOR_SIGNUP, menuList: menuList });
  } catch (error) {}
}




