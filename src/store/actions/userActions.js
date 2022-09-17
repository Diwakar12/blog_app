import { post } from "../../shared/core/Helpers/axiosHelper";
import constants from "../../shared/constants/environmentVariableConstants";
import buildUrls from "../../shared/core/Helpers/buildUrlHelper";

const userUrl = buildUrls(constants.BASE_URL, constants.API_VERSION, constants.USER_SIGNUP);

export const userSignUp = async (data) => {  
  const response = await post(userUrl,data);   
  return response.data; 
};
