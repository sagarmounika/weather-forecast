import React from "react"

const TimeAndLocation = ({weather: {locDateTime, loc_name, loc_country}}) => {
  return (
    <>
      <div className="flex items-center justify-start mt-3">
        <div className="  text-3xl font-medium">{`${loc_name}, ${loc_country}`}</div>
      </div>
      <div className="flex items-center justify-start ">
        <div className=" text-sm text-dark-gray font-normal">{locDateTime}</div>
      </div>
    </>
  )
}

export default TimeAndLocation
