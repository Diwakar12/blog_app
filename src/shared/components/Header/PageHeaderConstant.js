import routeConstants from "../../constants/routeConstants";

const PAGE_HEADER_CONSTANTS = {
  NAV_LABEL: {
    HOME: "Home",
    FLIGHT: "Flight",
    DESTINATION: "Destination",
    HOLIDAY_TYPE: "Holiday Type",
    TOURS: "Tours",
    MORE: "More",
  },
  TRAVEL_ROUTES: [
    routeConstants.ROUTE_ROOT_PATH,
  ],
};

const pageHeaderConstants = { ...PAGE_HEADER_CONSTANTS };
export default pageHeaderConstants;
