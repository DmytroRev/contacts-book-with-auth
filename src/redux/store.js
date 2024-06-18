import { configureStore } from "@reduxjs/toolkit";
// import filtersSlice from "./filtersSlice";
// import { filtersReducer } from "./filtersSlice";
// import { contactsReducer } from "./contactsSlice";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import authReducer from "./auth/slice"


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },

});

