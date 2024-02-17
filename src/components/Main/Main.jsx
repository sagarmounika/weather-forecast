import React from "react"
import {useSelector} from "react-redux"
import TimeAndLocation from "./TimeAndLocation"
import TemperatureAndDetails from "./TemperatureAndDetails"
import Forecast from "./Forecast"
import WeekForecast from "./WeekForecast"
import OtherDetails from "./OtherDetails.jsx"
const Main = () => {
  const {weatherData} = useSelector(state => state.weatherReducer)
  const {unit} = useSelector(state => state.searchReducer)
  return (
    <>
      {" "}
      {weatherData && (
        <div className="flex flex-1">
          <div className="w-1/3 border-r border-light-gray px-3">
            <TimeAndLocation weather={weatherData} />
            <TemperatureAndDetails weather={weatherData} unit={unit} />
          </div>

          <div className="flex-1 p-2 px-3">
            <Forecast
              title="hourly forecast"
              unit={unit}
              forecast={weatherData.hourlyForecast}
            />
            <WeekForecast
              title="daily forecast"
              unit={unit}
              forecast={weatherData.dailyForecast}
            />
            {/* <OtherDetails weather={weatherData} unit={unit} /> */}
          </div>
        </div>
      )}
    </>
  )
}

export default Main
