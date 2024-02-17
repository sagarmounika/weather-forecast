import {configureStore} from "@reduxjs/toolkit"
import weatherReducer from "./Reducers/weatherSlice"
import searchReducer from "./Reducers/searchSlice"
export const store = configureStore({
  reducer: {
    searchReducer: searchReducer,
    weatherReducer: weatherReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
