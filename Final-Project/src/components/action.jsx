import axios from "axios";

// actions.js
export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Simulate API request
      const response = await axios.get(
        "https://648b32c917f1536d65ea936a.mockapi.io/register",
        userData
      );

      // Dispatch success action
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      // Dispatch error action
      dispatch({
        type: "LOGIN_USER_FAILURE",
        payload: error.message,
      });
    }
  };
};
