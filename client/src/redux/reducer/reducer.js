// import { combineReducers } from "redux";
import { GET_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID, GET_ACTIVITIES, CREATE_ACTIVITY_SUCCESS ,CREATE_ACTIVITY_FAILURE} from "../action-type/action-types.js";

const initialState = {
  allCountries: [],
  countriesCopy: [],
  allActivities: [],
  createActivity: { success: null, error: null }
}

// Reducer para manejar las actividades
const activitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries : payload
      };
      
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        allCountries : payload
      };
    
    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        allCountries : payload
      };
    
    case GET_ACTIVITIES:
      return {
        ...state,
        allActivities : payload
      };

    case CREATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        createActivity: { success: true, error: null }
      };

    case CREATE_ACTIVITY_FAILURE:
      return {
        ...state,
        createActivity: { success: false, error: payload }
      };

    default:
      return state;
  }
}

export default activitiesReducer;
