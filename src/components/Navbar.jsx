import { CardIcon, MenuIcon, DeleteIcon } from "./Icons"
import logo from "../assets/images/logo.svg"
import userImage from "../assets/images/image-avatar.png"
import { useGlobalContext } from "../Context"
import { useState } from "react"
const Navbar = () => {
  const { setShowSidebar, productOrders } = useGlobalContext()
  const [showCardModal, setShowCardModal] = useState(false)
  return (
    <nav className='z-10 relative bg-clWhite'>
      <div className='p-4 px-6 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <button onClick={() => setShowSidebar(true)}>
            <MenuIcon />
          </button>
          <img src={logo} alt='logo' />
        </div>
        <div className='flex items-center space-x-6'>
          <button onTouchStart={() => setShowCardModal(!showCardModal)}>
            <CardIcon />
          </button>
          <img className='h-7' src={userImage} alt='user-avatar' />
        </div>
      </div>
      {showCardModal && (
        <div className='card-modal absolute top-full left-1/2 -translate-x-1/2 translate-y-5 bg-white rounded-lg'>
          <h1 className='border-b text-sm font-bold p-5 '>Card</h1>
          {productOrders.length > 0 ? (
            <div className='p-5'>
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
                    <div className='flex flex-col text-clDarkgrayishblue'>
                      <p className=' text-sm'>{title}</p>
                      <p>
                        ${offPrice.toFixed(2)} x {order}{" "}
                        <span className='font-bold text-clVerydarkblue'>
                          {totalPrice.toFixed(2)}
                        </span>
                      </p>
                    </div>

                    <button>
                      <DeleteIcon />
                    </button>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='grid place-items-center h-52'>
              <p className='font-bold text-center text-clDarkgrayishblue text-sm'>
                Your cart is empty
              </p>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
export default Navbar
