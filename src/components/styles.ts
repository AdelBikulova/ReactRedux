import styled from "@emotion/styled";
import { WeatherBack } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${WeatherBack});
`;
export const WeatherDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  min-height: 150px;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: rgba(97, 125, 160, 0.66);
  margin: auto;
`;

export const LoadingIndicator = styled.div`
  color: rgb(144, 15, 15);
  font-size: 24px;
  position: fixed;
  margin-left: 20px;
  top: 600px;
  left: 20px;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  gap: 3px;
  margin-left: 520px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: rgba(5, 93, 111, 0.69);
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #faffff;
  font-size: 45px;
  width: 100%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
