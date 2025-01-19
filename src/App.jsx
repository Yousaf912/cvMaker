import { useSelector } from "react-redux"
import About from "./Components/ABout/About"
import ContectUs from "./Components/Contact us/ContectUs"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import { Spinner } from "./Components/Spinner"
import Steps from "./Components/StepsSeccion/Steps";


function App() {
  const spiner = useSelector((state) => state.spiner.spinner);

  return (
    <>
      {spiner &&
        <Spinner />
      }

      <div>

        <Navbar />
        <Home />
        <Steps />
        <About />
        <ContectUs />
      </div>
    </>


  )
}

export default App
