import React, { useContext, useEffect, useState } from "react"
import products from "./data"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  const [product, setProduct] = useState(products[0])
  const [productImages, setProductImages] = useState(product.images)
  const [productOrders, setProductOrders] = useState([])
  const [order, setOrder] = useState(0)
  const [showCardModal, setShowCardModal] = useState(false)

  // console.log("reload context check")

  useEffect(() => {
    setProductImages(product.images)
  }, [product])
  const updateCart = (type, selectedProduct) => {
    if (type === "plus") {
      const prodoctOrdered = productOrders.find(
        (product) => product.id === selectedProduct.id
      )
      if (prodoctOrdered) {
        const newProductOrders = productOrders.map((product) => {
          if (product.id === selectedProduct.id) {
            product.order = product.order + 1
          }
          return product
        })
        setProductOrders(newProductOrders)
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
    } else if (type === "minus") {
      const prodoctOrdered = productOrders.find(
        (product) => product.id === selectedProduct.id
      )
      if (prodoctOrdered) {
        let totalOrder = 0
        const newProductOrders = productOrders.map((product) => {
          if (product.id === selectedProduct.id) {
            product.order = product.order - 1
            if (product.order <= 0) {
              product.order = 0
              totalOrder = -1
            }
          }
          return product
        })
        if (totalOrder === 0) setProductOrders(newProductOrders)
        else setProductOrders([])
      }
    } else {
      setProductOrders([])
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
        order,
        setOrder,
        showCardModal,
        setShowCardModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
