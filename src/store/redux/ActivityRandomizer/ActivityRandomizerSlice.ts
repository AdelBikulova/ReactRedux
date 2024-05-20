import { createAppSlice } from "store/createAppSlice"
import { ActivityRandomizerSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const ActivityRandomizerInitialState: ActivityRandomizerSliceState = {
  data: [],
  status: "default",
  error: undefined,
}

export const ActivityRandomizerSlice = createAppSlice({
  name: "ACTIVITYRANDOMIZER",
  initialState: ActivityRandomizerInitialState,
  reducers: create => ({
    getActivity: create.asyncThunk(
      async (arg, thunkApi) => {
        const response = await fetch("https://www.boredapi.com/api/activity")
        const result = await response.json()

        if (!response.ok) {
          thunkApi.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: typeof ActivityRandomizerInitialState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (
          state: typeof ActivityRandomizerInitialState,
          action: any,
        ) => {
          console.log("Received data from API:", action.payload)
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: action.payload?.key,
              activity: action.payload?.activity,
            },
          ]
        },
        rejected: (
          state: typeof ActivityRandomizerInitialState,
          action: any,
        ) => {
          state.status = "error"
          state.error = action.payload
          alert("Network error")
        },
      },
    ),
    deleteAllActivity: create.reducer(() => ActivityRandomizerInitialState),
    deleteActivity: create.reducer(
      (
        state: typeof ActivityRandomizerInitialState,
        action: PayloadAction<string>,
      ) => {
        state.data = state.data.filter(
          activity => activity.id !== action.payload,
        )
      },
    ),
  }),
  selectors: {
    activity: state => state,
  },
})

export const ActivityRandomizerSliceActions = ActivityRandomizerSlice.actions
export const ActivityRandomizerSliceSelectors =
  ActivityRandomizerSlice.selectors
