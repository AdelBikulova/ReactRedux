import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  ActivityRandomizerSliceActions,
  ActivityRandomizerSliceSelectors,
} from "store/redux/ActivityRandomizer/ActivityRandomizerSlice"
import Button from "components/Button/Button"
import Spinner from "components/Spinner/Spinner"
import { ActivityInfo } from "store/redux/ActivityRandomizer/types"
import {
  ActivityPageWrapper,
  ActivityCardWrapper,
  ActivityCard,
  ActivityText,
  ButtonContainer,
  SpinnerContainer,
} from "./styles"

function ActivityRandomizer() {
  const {
    data: activities,
    status,
    error,
  } = useAppSelector(ActivityRandomizerSliceSelectors.activity)
  const dispatch = useAppDispatch()

  const getActivity = () => {
    dispatch(ActivityRandomizerSliceActions.getActivity())
  }

  const deleteAllActivity = () => {
    dispatch(ActivityRandomizerSliceActions.deleteAllActivity())
  }

  const deleteActivity = (id: string) => {
    dispatch(ActivityRandomizerSliceActions.deleteActivity(id))
  }

  const ActivityRandomizerCards = activities.map((activity: ActivityInfo) => {
    return (
      <ActivityCardWrapper key={activity.id}>
        <ActivityCard>
          <ActivityText>{activity.activity}</ActivityText>
        </ActivityCard>
        <Button
          name="Delete Activity"
          onButtonClick={() => deleteActivity(activity.id)}
        />
      </ActivityCardWrapper>
    )
  })

  return (
    <ActivityPageWrapper>
      <ButtonContainer>
        <Button
          name="Get Activity"
          onButtonClick={getActivity}
          disabled={status === "loading"}
        />
      </ButtonContainer>
      {status === "loading" ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        ActivityRandomizerCards
      )}
      {activities.length > 0 && (
        <ButtonContainer>
          <Button
            name="Delete all Activity"
            onButtonClick={deleteAllActivity}
          />
        </ButtonContainer>
      )}
      {status === "error" && <div>{error}</div>}
    </ActivityPageWrapper>
  )
}

export default ActivityRandomizer
