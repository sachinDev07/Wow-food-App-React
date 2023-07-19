import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    logged: false,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.logged = action.payload;
      console.log(action.payload);
    },
  },
});

export const { loggedIn } = loginSlice.actions;
export default loginSlice.reducer;
