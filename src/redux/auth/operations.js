import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.goit.global/";

// qweqwe123@gmail.com

export const register = createAsyncThunk("auth/register",
    async (newUser, thunkAPI) => {
        try {
      const res = await axios.post("/users/signup", newUser)
      return res.data
  } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
  }
})
