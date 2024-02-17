import React from "react"
import {BsThermometerHalf, BsCloudSun} from "react-icons/bs"
import {MdOutlineWaterDrop} from "react-icons/md"
import {FiWind} from "react-icons/fi"
import {WiSunrise, WiSunset, WiMoonrise, WiMoonset} from "react-icons/wi"

function RenderDetail(props) {
  const Icon = props.icon
  return (
    <div className="flex flex-col basis-1/3 font-light text-sm items-center justify-center mr-2  p-2">
      <Icon size={30} className="mr-1 " />
      <span className="capitalize my-2">{`${props.text} `}</span>
      <span className="font-medium ml-1">{`${props.data}`}</span>
    </div>
  )
}

function RenderVerticalDetail(props) {
  const Icon = props.icon
  return (
    <div className="flex flex-col justify-center items-start border border-light-gray rounded-md p-2">
      <Icon size={45} />
      <div>
        <p className="font-medium mt-1 capitalize">{props.text}</p>
        <p className="font-medium text-gray-500">{props.data}</p>
      </div>
    </div>
  )
}

const OtherDetails = ({
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

  return (
    <>
      <div className="flex  items-center justify-between border border-light-gray rounded-md">
        {horizontalDetails.map(({id, icon, text, data}) => (
          <RenderDetail key={id} icon={icon} text={text} data={data} />
        ))}
      </div>
    </>
  )
}

export default OtherDetails
