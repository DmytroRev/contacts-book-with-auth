import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.goit.global/";

// Venceslav@gmail.com


export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
   try {
       const res = await axios.post("users/signup", newUser)
       return res.data
   } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
   }
})

export const logIn = createAsyncThunk("auth/logIn", async (userInfo, thunkAPI) => {
    try {
        const res = await axios.post("/users/login", userInfo)
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})