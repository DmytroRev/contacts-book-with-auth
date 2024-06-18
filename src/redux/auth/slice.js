import { createSlice } from "@reduxjs/toolkit";
// import { register } from "./operations";

const authSlice = createSlice({name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
  },
  // extraReducers: builder => builder.addCase(register.pending, (state) => {
  //   state.isLoading = true
  // })
  //   .addCase(register.fulfilled, (state, action) => {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token
  //     state.isLoading = false
  // })
})

export default authSlice.reducer