import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
function App() {
  return (
    <div className={`max-w bg-light-blue min-h-screen py-5`}>
      {" "}
      <div
        className={` mx-auto w-11/12  h-full shadow-xl shadow-gray-400 rounded-lg bg-white flex flex-col `}
      >
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
