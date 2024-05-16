import Button from "components/Button/Button"
import { ButtonControl, FeedbackWrapper, FeedbackResult, Icon } from "./styles"
import { Like, Dislike } from "assets"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceSelectors,
  feedbackSliceActions,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const dispatch = useAppDispatch()

  const addLike = () => {
    dispatch(feedbackSliceActions.incrementLikes())
  }

  const addDislike = () => {
    dispatch(feedbackSliceActions.incrementDislikes())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetFeedback())
  }

  return (
    <FeedbackWrapper>
      <FeedbackResult>
        <ButtonControl>
          <Icon src={Like} alt="Like" onClick={addLike} />
          {likes}
        </ButtonControl>
        <ButtonControl>
          <Icon src={Dislike} alt="Dislike" onClick={addDislike} />
          {dislikes}
        </ButtonControl>
      </FeedbackResult>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
