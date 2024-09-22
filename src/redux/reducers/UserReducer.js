import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null, // Pour stocker le token JWT
    profile: null, // Pour stocker les données du profil utilisateur
    isAuthenticated: false, // Vérifier si l'utilisateur est connecté
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.profile = null;
      state.isAuthenticated = false;
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
