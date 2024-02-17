import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {setCity} from "../../Reducers/searchSlice"
import {FaSearch} from "react-icons/fa"
const Search = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const onChangeHandler = event => {
    setQuery(event.currentTarget.value)
  }
  const handleSearchClick = () => {
    if (query !== "") dispatch(setCity(query))
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative ">
          <input
            type="text"
            className="border border-light-gray rounded-md py-2 px-6 pr-10 placeholder-gray-300 focus:outline-none"
            placeholder="Search for cities"
            onChange={onChangeHandler}
            value={query}
          />
          <button
            className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSearchClick}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search