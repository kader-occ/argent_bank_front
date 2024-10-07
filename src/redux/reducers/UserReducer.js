import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    profile: null,
    isAuthenticated: false,
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
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUserProfile, updateProfile } =
  userSlice.actions;

export default userSlice.reducer;
