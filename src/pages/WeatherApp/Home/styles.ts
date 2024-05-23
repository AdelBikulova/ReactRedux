import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const WeatherDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-height: 150px;
  gap: 20px;
`

export const WeatherData = styled.div`
  border-radius: 20px;
  border: 1px solid #000;
  background-color: rgba(102, 124, 152, 0.75);
  margin-top: 100px;
  padding: 20px;
`
export const ButtonControl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  button {
    width: 200px;
    height: 60px;
    border-radius: 10px;
    margin: 30px;
    font-size: 20px;
  }
`
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: rgb(247, 13, 13);
  font-size: 26px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  button {
    width: 300px;
    height: 60px;
    border-radius: 10px;
    margin: 30px;
    font-size: 20px;
  }
`
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 40px;
  color: white;
`

export const CityName = styled.p`
  font-size: 32px;
  margin: 20px;
  color: rgb(241, 241, 241);
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

export const WeatherImg = styled.img``
