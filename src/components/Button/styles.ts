import styled from "@emotion/styled"

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "#f7f7f7")};
  color: #010708;
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
`
