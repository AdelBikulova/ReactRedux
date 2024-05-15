import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 50%;
  max-width: 200px;
  height: 60px;
  outline: none;
  border: none;
  margin-top: -80px;
  margin-left: 70vw;
  border-radius: 20px;
  padding: 10px;
  background: ${({ disabled }) => (disabled ? "grey" : "#045fde;")};
  color: #f3f7fa;
  font-size: 26px;
  cursor: pointer;
`;
