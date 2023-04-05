import React, { useContext, useEffect, useState } from "react"
import products from "./data"
export const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
  const [showSiderbar, setShowSidebar] = useState(false)
  const [product, setProduct] = useState(products[0])
  const [productImages, setProductImages] = useState(product.images)
  const [productOrders, setProductOrders] = useState([])
  const [allOrder, setAllOrder] = useState(0)
  const [showCardModal, setShowCardModal] = useState(false)
  const [showModalImages, setShowModalImages] = useState(false)

  // console.log("reload context check")

  useEffect(() => {
    setProductImages(product.images)
  }, [product])
  const updateCart = (order, selectedProduct) => {
    let newProductOrders = []
    if (order === 0) {
      newProductOrders = productOrders.filter(
        (product) => product.id !== selectedProduct.id
      )
      setProductOrders(newProductOrders)
      return
    }
    const prodoctOrdered = productOrders.find(
      (product) => product.id === selectedProduct.id
    )
    if (prodoctOrdered) {
      newProductOrders = productOrders.map((product) => {
        if (product.id === selectedProduct.id) {
          product.order = order
        }
        return product
      })
    } else {
      const { id, title, offPrice, images } = selectedProduct
      newProductOrders = [
        ...productOrders,
        {
          id,
          thumbnail: images[0].thumbnail,
          title,
          offPrice,
          order,
        },
      ]
    }
    setProductOrders(newProductOrders)
    setAllOrder(order)
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
        allOrder,
        setAllOrder,
        showCardModal,
        setShowCardModal,
        showModalImages,
        setShowModalImages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
