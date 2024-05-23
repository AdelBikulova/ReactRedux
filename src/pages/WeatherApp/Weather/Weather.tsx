import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"
import {
  WeatherPageWrapper,
  WeatherDataWrapper,
  WeatherData,
  ButtonControl,
  TempWrapper,
  CityName,
  IconWrapper,
  WeatherImg,
} from "./styles"

const Weather = () => {
  const dispatch = useAppDispatch()
  const savedWeather = useAppSelector(weatherSliceSelectors.savedWeather)

  const handleDeleteWeather = (id: string) => {
    dispatch(weatherSliceActions.deleteWeather(id))
  }

  const handleDeleteAllWeather = () => {
    dispatch(weatherSliceActions.deleteAllWeather())
  }

  return (
    <WeatherPageWrapper>
      {savedWeather.length > 0 && (
        <WeatherDataWrapper>
          {savedWeather.map(data => (
            <WeatherData key={data.id}>
              <TempWrapper>
                <CityName>{data.city}</CityName>
                <p className="temperature">
                  {Math.round(data.main.temp - 273.15)}°C
                </p>
                <IconWrapper>
                  <WeatherImg
                    className="weather-icon"
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                </IconWrapper>
              </TempWrapper>
              <ButtonControl>
                <button onClick={() => handleDeleteWeather(data.id)}>
                  Delete
                </button>
              </ButtonControl>
            </WeatherData>
          ))}
          <ButtonControl>
            <button onClick={handleDeleteAllWeather}>Delete all cards</button>
          </ButtonControl>
        </WeatherDataWrapper>
      )}
    </WeatherPageWrapper>
  )
}

export default Weather
