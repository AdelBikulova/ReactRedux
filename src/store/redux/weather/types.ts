export interface WeatherData {
  id: string
  city: string
  main: {
    temp: number
  }
  weather: {
    icon: string
  }[]
}

export interface WeatherState {
  data: WeatherData[]
  saved: WeatherData[]
  isLoading: boolean
  error: any
}
