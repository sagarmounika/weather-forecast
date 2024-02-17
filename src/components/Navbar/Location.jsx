import React from "react"
import {setCity} from "../../Reducers/searchSlice"
import {useDispatch} from "react-redux"
import {FaLocationCrosshairs} from "react-icons/fa6"
const Location = () => {
  const dispatch = useDispatch()
  const handleLocationClick = () => {
    console.log("I am here")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        dispatch(setCity(lat + "," + lon))
      })
    }
  }
  return (
    <div className="border border-light-gray rounded-md mr-2 cursor-pointer py-2 px-4 flex items-center justify-center">
      <FaLocationCrosshairs
        onClick={handleLocationClick}
        size={20}
        className=" transition ease-out hover:scale-125 "
      />
    </div>
  )
}

export default Location
