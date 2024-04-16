import axios from "axios"
import {GET_COUNTRIES, GET_ACTIVITIES, GET_COUNTRIES_BY_NAME,GET_COUNTRIES_BY_ID,} from "../action-type/action-types"



export function getAllCountries() {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/countries");
            dispatch({ type: GET_COUNTRIES, payload: response.data });
        } catch (error) {
            console.log(error);
            // Aquí podrías despachar una acción para manejar el error si es necesario
        }
    };
}

export function getCountriesByName(name) {
    return async (dispatch) => {
        try {
          const response = await axios.get(`http://localhost:3001/countries?name=${ name }`);
            dispatch({ type: GET_COUNTRIES_BY_NAME, payload: response.data });
        } catch (error) {
            console.log(error);
            // Aquí podrías despachar una acción para manejar el error si es necesario
        }
    };
}

export function getCountriesById(id) {
    return async (dispatch) => {
        try {
          const response = await axios.get(`http://localhost:3001/countries/${ id }`);
            dispatch({ type: GET_COUNTRIES_BY_ID, payload: response.data });
        } catch (error) {
            console.log(error);
            // Aquí podrías despachar una acción para manejar el error si es necesario
        }
    };
}

//Ejemplo con fetch
// export const getAllCountries = () => {
//     return async  (dispatch) => {
//        await fetch("http://localhost:3001/countries")
//         .then((response) => response.json())
//         .then((data) => {
//           return dispatch({type: GET_COUNTRIES, payload: data})
//         })
      //   .catch((error) => {
      //   console.log(error);
      // })
//     }
// }



export function getAllActivities() {
    return async (dispatch) => {
        try {
          const response = await axios.get("http://localhost:3001/activities");
          dispatch({ type: GET_ACTIVITIES, payload: response.data });
          // console.log(response.data);
        } catch (error) {
            console.log(error);
            // Aquí podrías despachar una acción para manejar el error si es necesario
        }
    };
}

export function createActivity(activityData) {
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:3001/activities", activityData);
            // Despachar una acción si es necesario (por ejemplo, para actualizar el estado con la nueva actividad creada)
            console.log(response.data); // Puedes imprimir la respuesta del servidor si deseas verificarla

            // Si quieres actualizar el estado de actividades después de crear una nueva actividad, puedes llamar a la acción getAllActivities nuevamente.
            // Esto es opcional y depende de cómo desees manejar los datos en tu aplicación.
            dispatch(getAllActivities());
        } catch (error) {
            console.log(error);
            // Aquí podrías despachar una acción para manejar el error si es necesario
        }
    };
}