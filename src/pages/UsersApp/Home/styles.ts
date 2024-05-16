import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 500px;
  min-height: 300px;
  height: fit-content;
  padding: 20px;
  margin-top: -200px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #b8d6e2;
`

export const UserFormName = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #0e2936;
`

export const ButtonControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  button {
    width: 300px;
    height: 60px;
  }
`
