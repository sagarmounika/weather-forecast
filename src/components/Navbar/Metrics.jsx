import React, {useState} from "react"
import {setUnit} from "../../Reducers/searchSlice"
import {useDispatch, useSelector} from "react-redux"
import {RiCelsiusFill} from "react-icons/ri"
import {RiFahrenheitFill} from "react-icons/ri"
const Metrics = () => {
  const dispatch = useDispatch()
  const {unit} = useSelector(state => state.searchReducer)
  const [isChecked, setIsChecked] = useState(false)
  const unitHandler = () => {
    setIsChecked(!isChecked)
    const value = unit === "c" ? "f" : "c"
    dispatch(setUnit(value))
  }
  return (
    <div className="flex  justify-end w-full md:w-auto mt-2 md:mt-0">
      <label className="themeSwitcherTwo border border-light-gray shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={unitHandler}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-4  text-sm font-medium ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <RiCelsiusFill />
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-4  text-sm font-medium ${
            isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          <RiFahrenheitFill />
        </span>
      </label>
    </div>
  )
}

export default Metrics
