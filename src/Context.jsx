import React, { useContext, useState } from "react"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  return (
    <AppContext.Provider value={{ showSiderbar, setShowSidebar }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
