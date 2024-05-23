import { createAppSlice } from "store/createAppSlice"
import { WeatherData, WeatherState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

const API_KEY = "2d9a6fef8a1b19901b76d4dd0331e599"

const weatherInitialState: WeatherState = {
  data: [],
  saved: [],
  isLoading: false,
  error: undefined,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    deleteWeather: create.reducer(
      (state: WeatherState, action: PayloadAction<string>) => {
        state.data = state.data.filter(
          (weatherObj: WeatherData) => weatherObj.id !== action.payload,
        )
        state.saved = state.saved.filter(
          (weatherObj: WeatherData) => weatherObj.id !== action.payload,
        )
      },
    ),
    getWeather: create.asyncThunk(
      async (arg: { city: string }, { rejectWithValue }) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${arg.city}&appid=${API_KEY}`,
        )
        const result = await response.json()

        if (!response.ok) {
          return rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: WeatherState) => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state: WeatherState, action: PayloadAction<any>) => {
          state.isLoading = false
          state.data = [
            ...state.data,
            {
              id: v4(),
              city: action.payload.name,
              main: {
                temp: action.payload.main.temp,
              },
              weather: [
                {
                  icon: action.payload.weather[0].icon,
                },
              ],
            },
          ]
        },
        rejected: (state: WeatherState, action: PayloadAction<any>) => {
          state.isLoading = false
          state.error = action.payload
        },
      },
    ),
    resetWeatherState: create.reducer(() => weatherInitialState),
    deleteAllWeather: create.reducer((state: WeatherState) => {
      state.saved = []
    }),
    deleteError: create.reducer((state: WeatherState) => {
      state.error = null
    }),
    saveWeather: create.reducer(
      (state: WeatherState, action: PayloadAction<string>) => {
        const weather = state.data.find(
          (weatherObj: WeatherData) => weatherObj.id === action.payload,
        )
        if (weather) {
          state.saved.push(weather)
          state.data = state.data.filter(
            (weatherObj: WeatherData) => weatherObj.id !== action.payload,
          )
        }
      },
    ),
  }),
  selectors: {
    weather: (state: WeatherState) => state,
    data: (state: WeatherState) => state.data,
    savedWeather: (state: WeatherState) => state.saved,
  },
})

export const weatherSliceActions = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
