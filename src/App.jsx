// import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Banner from "./components/banner"
import About from "./components/about"
import Education from "./components/education"
import Experience from "./components/experience"
import Project from "./components/project"
import Contact from "./components/contact"
import ThemeProvider from "./components/themeContext"
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Banner />
      <About />
      <Education />
      <Experience />
      <Project />
      <Contact />
    </ThemeProvider>
  )
}

export default App
