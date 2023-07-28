import { Route, Routes } from "react-router"
import { Navigation } from "./Components/Navigation"
import { Home } from "./Pages/Home"

function App() {

  return (
    <>
      <div className="App animate__animated animate__fadeIn">
        <div className="background App">
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
