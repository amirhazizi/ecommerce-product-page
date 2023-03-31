import defaultImage from "../assets/images/image-product-1.jpg"
import { NextIcon, PreviousIcon, MinusIcon, PlusIcon, CardIcon } from "./Icons"
const Hero = () => {
  return (
    <header className='-mt-5 mb-10'>
      <div className='relative'>
        <img src={defaultImage} alt='' />
        <button className='slide-btn absolute top-1/2 right-0 -translate-x-4 bg-white rounded-full'>
          <NextIcon />
        </button>
        <button className='slide-btn absolute top-1/2 left-0 translate-x-4 bg-white rounded-full'>
          <PreviousIcon />
        </button>
      </div>
      <div className='p-5 space-y-3  font-bold'>
        <p className='uppercase text-clOrange text-sm'>Sneaker Company</p>
        <h1 className='text-clVerydarkblue text-3xl'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='text-clDarkgrayishblue text-sm opacity-75'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className='flex items-center w-full py-3'>
          <div className='flex items-center gap-x-4'>
            <h1 className='text-3xl'>$125.00</h1>
            <h2 className='text-clOrange bg-orange-100 px-2 rounded-md'>50%</h2>
          </div>
          <h3 className=' ml-auto line-through text-clDarkgrayishblue opacity-50'>
            $250.00
          </h3>
        </div>
        <div className='space-y-4'>
          <div className='flex justify-between bg-clLightgrayishblue p-5 py-4 rounded-md'>
            <button className='fill-clOrange'>
              <MinusIcon />
            </button>
            <p>0</p>
            <button>
              <PlusIcon />
            </button>
          </div>
          <button className='addToCard-btn w-full bg-clOrange text-clWhite flex gap-x-3 justify-center p-4 rounded-lg text-sm'>
            <svg
              className='scale-75'
              width='22'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
                fill='#FFF'
                fillRule='nonzero'
              />
            </svg>
            Add to card
          </button>
        </div>
      </div>
    </header>
  )
}
export default Hero
