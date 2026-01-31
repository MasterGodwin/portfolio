import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Banner from "./components/banner"
import About from "./components/about"
import Contact from "./components/contact"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <Banner />
            <About />
            <Contact />
          </div> }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
