import styled from "@emotion/styled"

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 24px;
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px;
  gap: 20px;
  width: 420px;
  background-color: #cbf0f0;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`

export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 26px;
`
export const ButtonControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
  margin-top: 50px;
`
