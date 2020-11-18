import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAILED } from "./types";

// Register User

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: red.data,
    });
  } catch (err) {
      const errors = err.response.data.errors;
    dispatch({
      type: REGISTER_FAILED,
    });
  }
};
