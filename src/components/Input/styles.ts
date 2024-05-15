import styled from "@emotion/styled";

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: fit-content;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputComponent = styled.input`
  width: 80%;
  max-width: 900px;
  height: 60px;
  margin-top: 160px;
  padding: 12px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  border-radius: 20px;
  font-size: 16px;

  &::placeholder {
    color: #6f6f6f;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  height: 18px;
`;
