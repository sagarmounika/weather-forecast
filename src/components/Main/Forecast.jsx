import React from "react"

const Forecast = ({title, unit, forecast}) => {
  console.log(forecast, "forecast")
  return (
    <div className="w-full border  border-light-gray rounded-md mb-3">
      <div className="flex items-center justify-start p-2  border-b  border-light-gray">
        <div className="font-medium uppercase">{title}</div>
      </div>

      <div className="flex flex-row items-center justify-between p-2 px-4">
        {forecast.map(({title, icon, temp_c, temp_f}) => (
          <div
            key={Math.random()}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-sm font-normal text-dark-gray ">{title}</div>
            <img className="w-12 my-1" src={icon} alt="///" />
            <div className="font-medium">
              {unit === "c" ? temp_c : temp_f}{" "}
              <sup>°{unit === "c" ? "C" : "F"}</sup>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
