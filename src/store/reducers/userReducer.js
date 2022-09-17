import actionTypeConstants from "../../shared/constants/actionTypes";
const initState = {
  userDetails: {},
  errorData: {},
   
};

const userReducer = (state = initState, action) => {  
  switch (action.type) {
    case actionTypeConstants.ACTION_TYPE_USER_SIGNUP: {
      return { ...state, userDetails: action.userDetails };
    }
    case actionTypeConstants.ACTION_TYPE_USER_SIGN_UP_ERROR_UPDATE: {
      return { ...state, errorData: action.errorData };
    }
   
    default:
      return state;
  }
};

export default userReducer;
