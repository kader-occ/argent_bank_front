import axios from "axios";
import {
  loginSuccess,
  logout,
  setUserProfile,
  updateProfileSuccess,
} from "../reducers/UserReducer";

const API_URL = "http://localhost:3001/api/v1/user";

/**
 * Login user
 * @param {string} email
 * @param {string} password
 * @returns {function}
 */
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const token = response.data.body.token;
    dispatch(loginSuccess({ token }));
    dispatch(fetchUserProfile(token));
  } catch (error) {
    console.error("Error login:", error);
  }
};

/**
 * Récupère le user profile
 * @param {string} token
 * @returns {function}
 */
export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setUserProfile(response.data.body));
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

/**
 * Update user profile
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} token
 * @returns {function}
 */
export const updateUserProfile =
  (firstName, lastName, token) => async (dispatch) => {
    try {
      await axios.put(
        `${API_URL}/profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateProfileSuccess({ firstName, lastName }));
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

export const signout = () => (dispatch) => {
  dispatch(logout());
};
