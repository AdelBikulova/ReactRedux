import { createAppSlice } from "store/createAppSlice"
import { FeedbackStateSlice } from "./types"
// import { PayloadAction } from "@reduxjs/toolkit"

const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    incrementLikes: create.reducer((state: FeedbackStateSlice) => {
      state.likes = state.likes + 1
    }),
    incrementDislikes: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    resetFeedback: create.reducer((state: FeedbackStateSlice) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),

  // первый вариант
  //   resetResults: create.reducer(() => feedbackInitialState)
  // }),

  // второй вариант
  // resetResults: create.reducer((state: FeedbackSliceState) => {
  //   state.likeCount = 0
  //   state.dislikeCount = 0
  // })

  selectors: {
    likes: (state: FeedbackStateSlice) => state.likes,
    dislikes: (state: FeedbackStateSlice) => state.dislikes,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
