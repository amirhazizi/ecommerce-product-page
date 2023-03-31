import React, { useContext, useEffect, useState } from "react"
import products from "./data"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  const [product, setProduct] = useState(products[0])
  const [productImages, setProductImages] = useState(product.images)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [order, setOrder] = useState(0)
  const checkIndexChanger = (value) => {
    if (value < 0) return productImages.length - 1
    if (value >= productImages.length) return 0
    return value
  }
  const addSliderIndex = () => {
    const value = sliderIndex + 1
    setSliderIndex(checkIndexChanger(value))
  }
  const minusSliderIndex = () => {
    const value = sliderIndex - 1
    setSliderIndex(checkIndexChanger(value))
  }
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
        sliderIndex,
        setSliderIndex,
        order,
        setOrder,
        addSliderIndex,
        minusSliderIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
