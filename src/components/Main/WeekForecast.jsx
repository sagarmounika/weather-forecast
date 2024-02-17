import React from "react"
const Col = ({title, subTitle, unit, type}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-medium">
        {title}
        {type === "temp" ? <sup>°{unit === "c" ? "C" : "F"}</sup> : ""}
      </div>

      <div className="text-sm font-normal text-dark-gray ">{subTitle}</div>
    </div>
  )
}
const WeekForecast = ({title, unit, forecast}) => {
  console.log(forecast, "forecast")
  return (
    <div className="w-full  mb-3">
      <div className="flex items-center justify-start p-2  border-b  border-light-gray">
        <div className="font-medium uppercase">{title}</div>
      </div>

      <div className="flex flex-col mt-2">
        {forecast.map(
          ({
            title,
            icon,
            temp_c,
            temp_f,
            sub_title,
            low_temp_c,
            low_temp_f,
            wind_mph,
            wind_kph,
            high_temp_c,
            high_temp_f,
            humidity,
          }) => (
            <div
              key={Math.random()}
              className="flex flex-row justify-between items-center border  border-light-gray rounded-md p-2 px-4 mb-2"
            >
              <Col title={title} subTitle={sub_title} />

              <img className="w-12 my-1" src={icon} alt="///" />
              <Col
                title={unit === "c" ? low_temp_c : low_temp_f}
                subTitle={"Low"}
                type="temp"
                unit={unit}
              />
              <Col
                title={unit === "c" ? high_temp_c : high_temp_f}
                subTitle={"High"}
                type="temp"
                unit={unit}
              />
              <Col
                title={unit === "c" ? wind_kph + " km/h" : wind_mph + "m/h"}
                subTitle={"Wind"}
                type="wind"
                unit={unit}
              />
              <Col
                title={humidity + " %"}
                subTitle={"Humidity"}
                type="humidity"
                unit={unit}
              />
              {/* <p className="font-medium">
                {unit === "c" ? temp_c : temp_f}{" "}
                <sup>°{unit === "c" ? "C" : "F"}</sup>
              </p> */}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default WeekForecast
