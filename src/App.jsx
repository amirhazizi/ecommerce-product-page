import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import { useGlobalContext } from "./Context"
function App() {
  const { showSiderbar } = useGlobalContext()
  return (
    <>
      <Navbar />
      {showSiderbar && <Sidebar />}
    </>
  )
}

export default App
