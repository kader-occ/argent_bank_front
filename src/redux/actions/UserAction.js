import axios from "axios";
import { loginSuccess, logout, setUserProfile } from "../reducers/UserReducer";

const API_URL = "http://localhost:3001/api/v1/user";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const token = response.data.body.token;

    // Dispatch l'action de succès de connexion
    dispatch(loginSuccess({ token }));

    // Récupérer les informations du profil utilisateur
    dispatch(fetchUserProfile(token));
  } catch (error) {
    console.error("Error login:", error);
  }
};

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

    const userProfile = response.data.body;

    // Dispatch l'action pour stocker les données du profil
    dispatch(setUserProfile(userProfile));
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

export const signout = () => (dispatch) => {
  dispatch(logout());
};
