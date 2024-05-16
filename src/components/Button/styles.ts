import styled from "@emotion/styled"

interface ButtonComponentProps {
  disabled: boolean
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: auto;
  height: 60px;
  outline: none;
  border: 2px solid #2f5a6e;
  border-radius: 10px;
  padding: 10px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "#ffffff")};
  color: #010708;
  font-size: 30px;
  margin: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #111111;
  }
`
