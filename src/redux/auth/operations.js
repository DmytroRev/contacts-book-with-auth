import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.goit.global/";

// Venceslav@gmail.com

const setAuthHeader = (token) => { axios.defaults.headers.common.Authorization = `Bearer ${token}`}

const clearAuthHeader = () => {axios.defaults.headers.common.Authorization = ""}

export const register = createAsyncThunk("auth/register", async (newUser, thunkAPI) => {
   try {
       const res = await axios.post("users/signup", newUser)
       setAuthHeader(res.data.token)
       return res.data
   } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
   }
})

export const logIn = createAsyncThunk("auth/logIn", async (userInfo, thunkAPI) => {
    try {
        const res = await axios.post("/users/login", userInfo)
        setAuthHeader(res.data.token)
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const res = await axios.post("/users/logout")
         clearAuthHeader()
        return res.data 
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})