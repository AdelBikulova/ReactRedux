import styled from "@emotion/styled"
import { Fon } from "assets"

export const ActivityPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${Fon});
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const ActivityCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  margin: 30px 0;
  gap: 30px;
`

export const ActivityCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  min-height: 120px;
  padding: 20px;
  background: #dfd9d6;
  border-radius: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 30px;
`

export const ActivityText = styled.p`
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
`
export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`
