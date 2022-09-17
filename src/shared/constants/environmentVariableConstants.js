const ENV = {
  UI_SETTINGS: "uisettings",
  CYTEL_API_KEY: "cyt-api-key",
};

const API = {
  API_VERSION: "v1", 
  BASE_URL:"http://localhost:3600",
  MENULIST: "masters/masters/menuList",
  USER_SIGNUP:"register"
  
};

const environmentVariableConstants = { ...ENV, ...API };
export default environmentVariableConstants;
