import actionTypeConstants from "../../shared/constants/actionTypes";
const initState = {
  menuList: [],
   
};

const homeReducer = (state = initState, action) => {

  switch (action.type) {
    case actionTypeConstants.ACTION_TYPE_MENU_LIST_UPDATE: {
      return { ...state, menuList: action.menuList };
    }
   
    default:
      return state;
  }
};

export default homeReducer;
