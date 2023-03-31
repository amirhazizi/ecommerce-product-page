import React, { useContext, useEffect, useState } from "react"
import products from "./data"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  const [product, setProduct] = useState(products[0])
  const [productImages, setProductImages] = useState(product.images)
  const [index, setIndex] = useState(0)
  const [order, setOrder] = useState(0)
  useEffect(() => {
    setProductImages(product.images)
  }, [product])
  return (
    <AppContext.Provider
      value={{
        showSiderbar,
        setShowSidebar,
        product,
        productImages,
        index,
        setIndex,
        order,
        setOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
