// weatherSlice.js
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {getFormattedWeatherData} from "../utilities/weatherFormatting"

const API_KEY = "39ebde1d03084fba89494919241602"
const BASE_URL = "http://api.weatherapi.com/v1"

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=4`
      )
      const formattedWeatherData = getFormattedWeatherData(response.data)
      return formattedWeatherData
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeatherData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false
        state.weatherData = action.payload
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default weatherSlice.reducer
