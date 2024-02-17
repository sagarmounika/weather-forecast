import React from "react"
import {useSelector} from "react-redux"
import TimeAndLocation from "./TimeAndLocation"
import TemperatureAndDetails from "./TemperatureAndDetails"
import Forecast from "./Forecast"
import WeekForecast from "./WeekForecast"
import {MdErrorOutline} from "react-icons/md"
const Main = () => {
  const {weatherData, loading, error} = useSelector(
    state => state.weatherReducer
  )
  const {unit} = useSelector(state => state.searchReducer)
  return (
    <div className="flex flex-1 flex-col lg:flex-row text-xs md:text-base">
      {" "}
      {loading ? (
        <div className="flex items-center justify-center w-full   mt-10">
          <img src="./loading.gif" alt="Logo" className="w-24 lg:w-auto" />
        </div>
      ) : error ? (
        <div className="flex items-center flex-col justify-center w-full   mt-10 p-5">
          <MdErrorOutline size={30} />
          <div className="text-dark-gray">No Data Available</div>
        </div>
      ) : (
        weatherData && (
          <>
            <div className="w-full lg:w-1/3 border-r border-light-gray px-3">
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
          </>
        )
      )}
    </div>
  )
}

export default Main
