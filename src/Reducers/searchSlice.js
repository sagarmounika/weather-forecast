import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

// const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"
// const GEO_API_OPTIONS = {
//   headers: {
//     "X-RapidAPI-Key": "8be5bc62e8mshc0ede9dfc4cd7afp156d01jsna1c7c41c8255",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// }

// export const getCities = createAsyncThunk(
//   "search/getCities",
//   async (searchInput, {rejectWithValue}) => {
//     try {
//       const response = await axios.get(
//         `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${searchInput}`,
//         GEO_API_OPTIONS
//       )
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response.data)
//     }
//   }
// )

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    city: "kolkata",
    error: null,
    unit: "c",
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload
    },
    setUnit: (state, action) => {
      state.unit = action.payload
    },
  },
  //   extraReducers: builder => {
  //     builder
  //       .addCase(getCities.pending, state => {
  //         state.loading = true
  //         state.error = null
  //       })
  //       .addCase(getCities.fulfilled, (state, action) => {
  //         state.loading = false
  //         state.cities = action.payload
  //       })
  //       .addCase(getCities.rejected, (state, action) => {
  //         state.loading = false
  //         state.error = action.payload.message
  //       })
  //   },
})
export const {setCity, setUnit} = searchSlice.actions
export default searchSlice.reducer
