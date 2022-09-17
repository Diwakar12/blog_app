import { get } from "../../shared/core/Helpers/axiosHelper";
import constants from "../../shared/constants/environmentVariableConstants";
import buildUrls from "../../shared/core/Helpers/buildUrlHelper";

const menuListUrl = buildUrls(constants.BASE_URL, constants.API_VERSION, constants.MENULIST);

export const getMenuListData = async () => {  
  try {
    const response = await get(menuListUrl);   
    return response.data;
  } catch (error) {    
    return error;
  }
};
