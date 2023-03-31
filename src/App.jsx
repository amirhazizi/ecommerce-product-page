import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { useGlobalContext } from "./Context"
function App() {
  const { showSiderbar } = useGlobalContext()
  return (
    <>
      <Navbar />
      {showSiderbar && <Sidebar />}
      <Hero />
    </>
  )
}

export default App
