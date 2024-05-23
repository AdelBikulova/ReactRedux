import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weatherSlice"
import {
  HomePageWrapper,
  WeatherDataWrapper,
  WeatherData,
  TempWrapper,
  CityName,
  IconWrapper,
  WeatherImg,
  ButtonControl,
  ErrorWrapper,
} from "./styles"
import Spinner from "components/Spinner/Spinner"
import Input from "components/Input/Input"
import Button from "components/Button/Button"

const Home = () => {
  const dispatch = useAppDispatch()
  const weatherState = useAppSelector(weatherSliceSelectors.weather)
  const { data: weatherData, isLoading, error } = weatherState
  const [city, setCity] = useState("")

  const getWeatherData = async () => {
    if (!city.trim()) {
      alert("Please enter a city name")
      return
    }
    dispatch(weatherSliceActions.getWeather({ city }))
    setCity("")
  }

  const handleDeleteError = () => {
    dispatch(weatherSliceActions.deleteError())
  }

  const handleSaveWeather = (id: string) => {
    dispatch(weatherSliceActions.saveWeather(id))
  }

  const handleDeleteWeather = (id: string) => {
    dispatch(weatherSliceActions.deleteWeather(id))
  }

  return (
    <HomePageWrapper>
      <Input
        name="city"
        placeholder="Enter city"
        onInputChange={e => setCity(e.target.value)}
        value={city}
      />
      <Button name="Search" onButtonClick={getWeatherData} />
      {isLoading && <Spinner />}
      {(error || weatherData.length > 0) && (
        <WeatherDataWrapper>
          {error && (
            <WeatherData>
              <ErrorWrapper>
                <div>{`API Error ${error.code}`}</div>
                <div>{error.message}</div>
                <button onClick={handleDeleteError}>Delete</button>
              </ErrorWrapper>
            </WeatherData>
          )}
          {weatherData.length > 0 &&
            weatherData.map(data => (
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
                  <button onClick={() => handleSaveWeather(data.id)}>
                    Save
                  </button>
                  <button onClick={() => handleDeleteWeather(data.id)}>
                    Delete
                  </button>
                </ButtonControl>
              </WeatherData>
            ))}
        </WeatherDataWrapper>
      )}
    </HomePageWrapper>
  )
}

export default Home
