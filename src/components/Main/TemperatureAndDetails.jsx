import React from "react"
import {BsThermometerHalf, BsCloudSun} from "react-icons/bs"
import {MdOutlineWaterDrop} from "react-icons/md"
import {FiWind} from "react-icons/fi"
import {WiSunrise, WiSunset, WiMoonrise, WiMoonset} from "react-icons/wi"
function RenderDetail(props) {
  const Icon = props.icon
  return (
    <div className="flex flex-col basis-1/3 font-light text-sm items-center justify-center   p-2">
      <Icon size={30} className="" />
      <span className="font-medium mt-2 capitalize">{`${props.text} `}</span>
      <span className="text-sm font-normal text-dark-gray ">{`${props.data}`}</span>
    </div>
  )
}
function RenderVerticalDetail(props) {
  const Icon = props.icon
  return (
    <div className="flex flex-col justify-center items-center border border-light-gray rounded-md p-2">
      <Icon size={35} />
      <div className="text-center">
        <div className="font-medium mt-1 capitalize">{props.text}</div>
        <div className="text-xs font-normal text-dark-gray">{props.data}</div>
      </div>
    </div>
  )
}

const TemperatureAndDetails = ({
  unit,
  weather: {
    condition_icon,
    condition_text,
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    sunrise,
    sunset,
    moonrise,
    moonset,
  },
}) => {
  const verticalDetails = [
    {
      id: 1,
      icon: WiSunrise,
      text: "sunrise",
      data: sunrise,
    },
    {
      id: 2,
      icon: WiSunset,
      text: "sunset",
      data: sunset,
    },
    {
      id: 3,
      icon: WiMoonrise,
      text: "moonrise",
      data: moonrise,
    },
    {
      id: 4,
      icon: WiMoonset,
      text: "moonset",
      data: moonset,
    },
  ]
  const horizontalDetails = [
    {
      id: 1,
      icon: BsThermometerHalf,
      text: "real fell",
      data: `${unit === "c" ? feelslike_c : feelslike_f}°`,
    },
    {
      id: 2,
      icon: MdOutlineWaterDrop,
      text: "humidity",
      data: humidity + " %",
    },
    {
      id: 3,
      icon: FiWind,
      text: "wind",
      data: `${unit === "c" ? wind_kph + " km/h" : wind_mph + "m/h"}`,
    },
  ]

  return (
    <>
      <div className="flex  my-3 text-xs md:text-base">
        <div className="flex flex-row items-center justify-center ">
          <img
            className="w-24 md:w-32  border-light-gray"
            src={condition_icon}
            alt="///"
          />
          <div className="flex flex-col pl-2">
            <di className="text-5xl font-medium">
              {unit === "c" ? temp_c : temp_f}
              <sup>°{unit === "c" ? "C" : "F"}</sup>
            </di>
            <div className="text-dark-text  font-medium text-2xl">
              {condition_text}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-between border border-light-gray rounded-md my-6">
        {horizontalDetails.map(({id, icon, text, data}) => (
          <RenderDetail key={id} icon={icon} text={text} data={data} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4  text-sm my-3">
        {verticalDetails.map(({id, icon, text, data}) => (
          <RenderVerticalDetail key={id} icon={icon} text={text} data={data} />
        ))}
      </div>
    </>
  )
}

export default TemperatureAndDetails
