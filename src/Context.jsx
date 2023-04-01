import React, { useContext, useEffect, useState } from "react"
import products from "./data"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  const [product, setProduct] = useState(products[0])
  const [productImages, setProductImages] = useState(product.images)
  const [productOrders, setProductOrders] = useState([])

  console.log("reload check")

  useEffect(() => {
    setProductImages(product.images)
  }, [product])
  const updateCart = (type, selectedProduct) => {
    if (type === "plus") {
      const prodoctOrdered = productOrders.find(
        (product) => product.id === selectedProduct.id
      )
      if (prodoctOrdered) {
        prodoctOrdered.order = prodoctOrdered.order + 1
      } else {
        const { id, title, offPrice, images } = selectedProduct
        const newProductOrders = [
          ...productOrders,
          {
            id,
            thumbnail: images[0].thumbnail,
            title,
            offPrice,
            order: 1,
          },
        ]
        setProductOrders(newProductOrders)
      }
      console.log(productOrders)
    }
  }
  return (
    <AppContext.Provider
      value={{
        showSiderbar,
        setShowSidebar,
        product,
        productImages,
        productOrders,
        updateCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
