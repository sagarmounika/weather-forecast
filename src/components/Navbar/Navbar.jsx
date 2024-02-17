import React, {useEffect} from "react"
import Logo from "../../assets/logo.png"
import Search from "./Search"
import Metrics from "./Metrics"
import Location from "./Location"
import {useDispatch, useSelector} from "react-redux"
import {fetchWeatherData} from "../../Reducers/weatherSlice"
const Navbar = () => {
  const {city} = useSelector(state => state.searchReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        await dispatch(fetchWeatherData(city))
      } catch (error) {
        console.log(error)
      }
    }

    fetchWeather()
  }, [dispatch, city])

  return (
    <div className=" border-b border-light-gray w-full">
      <div className="flex flex-col md:flex-row items-start sm:items-start md:items-start lg:items-center w-full py-2 px-3 justify-between">
        <div className="hidden sm:hidden md:hidden lg:block">
          <img alt="logo" src={Logo} width="250" height="250" />
        </div>
        <div className="flex items-stretch text-xs sm:text-xs md:text-xs w-2/5 ">
          <Location />
          <Search />
        </div>

        <Metrics />
      </div>
    </div>
  )
}

export default Navbar
