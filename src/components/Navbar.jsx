import { CardIcon, MenuIcon, DeleteIcon } from "./Icons"
import logo from "../assets/images/logo.svg"
import userImage from "../assets/images/image-avatar.png"
import { useGlobalContext } from "../Context"
import { useState } from "react"
const Navbar = () => {
  const {
    setShowSidebar,
    productOrders,
    updateCart,
    allOrder,
    showCardModal,
    setShowCardModal,
  } = useGlobalContext()
  // console.log("reload navbar check")

  return (
    <nav className='z-20 bg-clWhite'>
      <div className='relative p-4 px-6 flex justify-between items-center  md:border-b-2 md:max-w-2xl md:mx-auto md:px-0 md:py-7 md:pb-10 lg:max-w-5xl'>
        <div className='flex items-center space-x-4 md:space-x-0 md:gap-x-12'>
          <button
            className='md:hidden'
            onTouchStart={() => setShowSidebar(true)}
            onClick={() => setShowSidebar(true)}
          >
            <MenuIcon />
          </button>
          <img className='md:ml-10' src={logo} alt='logo' />
          <ul className='hidden md:flex space-x-6 font-bold text-sm text-clDarkgrayishblue opacity-70'>
            <li>
              <a className='cursor-pointer' href=''>
                Collections
              </a>
            </li>
            <li>
              <a className='cursor-pointer' href=''>
                Men
              </a>
            </li>
            <li>
              <a className='cursor-pointer' href=''>
                Women
              </a>
            </li>
            <li>
              <a className='cursor-pointer' href=''>
                About
              </a>
            </li>
            <li>
              <a className='cursor-pointer' href=''>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center space-x-6'>
          <button
            className='relative'
            onTouchStart={() => setShowCardModal(!showCardModal)}
            onClick={() => setShowCardModal(!showCardModal)}
          >
            {productOrders.length > 0 && (
              <p className='absolute bg-clOrange text-clPaleorange right-0 top-0 -translate-y-2 translate-x-2 text-xs px-2 rounded-xl'>
                {allOrder}
              </p>
            )}
            <CardIcon />
          </button>
          <img className='h-7' src={userImage} alt='user-avatar' />
        </div>
        {showCardModal && (
          <div className=' card-modal absolute top-full right-1/2  translate-y-4 translate-x-1/2 bg-white rounded-lg md:right-0 md:translate-x-0 md:-translate-y-2 z-20'>
            <h1 className='border-b text-sm font-bold p-5 '>Card</h1>
            {productOrders.length > 0 ? (
              <div className='p-5 space-y-5'>
                {productOrders.map((productOrder) => {
                  const { thumbnail, title, offPrice, order, id } = productOrder
                  const totalPrice = offPrice * order
                  return (
                    <div key={id} className='flex items-center gap-x-5'>
                      <img
                        src={thumbnail}
                        alt={title}
                        className='w-1/5 rounded-lg h-14'
                      />
                      <div className='flex flex-col text-clDarkgrayishblue space-y-1'>
                        <p className=' text-sm'>{title}</p>
                        <p>
                          ${offPrice.toFixed(2)} x {order}{" "}
                          <span className='font-bold text-clVerydarkblue'>
                            {totalPrice.toFixed(2)}
                          </span>
                        </p>
                      </div>
                      <button
                        onTouchStart={() => updateCart(0, productOrder)}
                        onClick={() => updateCart(0, productOrder)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  )
                })}
                <button className='text-center text-clWhite bg-clOrange p-3 w-full rounded-lg'>
                  Checkout
                </button>
              </div>
            ) : (
              <div className='grid place-items-center h-32 '>
                <p className='font-bold text-center text-clDarkgrayishblue text-sm md:text-xs'>
                  Your cart is empty
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
