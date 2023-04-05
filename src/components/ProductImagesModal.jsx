import { useState } from "react"
import { NextIcon, PreviousIcon, CloseIcon } from "./Icons"
import { useGlobalContext } from "../Context"
const ProductImagesModal = () => {
  const { product, showModalImages, setShowModalImages, productImages } =
    useGlobalContext()
  const { title } = product
  const [Images, setImages] = useState(productImages)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [bigHeaderIndex, setBigHeaderIndex] = useState(0)
  const addSliderIndex = () => {
    const value = sliderIndex + 1
    const result = checkIndexChanger(value)
    setSliderIndex(result)
    setBigHeaderIndex(result)
  }
  const minusSliderIndex = () => {
    const value = sliderIndex - 1
    const result = checkIndexChanger(value)
    setSliderIndex(result)
    setBigHeaderIndex(result)
  }
  const checkIndexChanger = (value) => {
    if (value < 0) return productImages.length - 1
    if (value >= productImages.length) return 0
    return value
  }
  return (
    <aside
      className={`absolute left-0 top-0 bg-clBlack bg-opacity-60 w-full z-20 grid h-full place-items-center ${
        showModalImages || "hidden"
      }`}
    >
      <div className='relative'>
        <div className='relative modal-container overflow-hidden rounded-xl '>
          {Images.map((productimage, index) => {
            let position = "translate-x-full invisible"
            if (index === sliderIndex) position = ""
            if (
              index === sliderIndex - 1 ||
              (sliderIndex === 0 && index === Images.length - 1)
            )
              position = "-translate-x-full invisible"
            return (
              <img
                className={`absolute top-0 left-0  transition-all  ${position}`}
                key={index}
                src={productimage.jpg}
                alt={`${title}-image-${index + 1}`}
              />
            )
          })}
        </div>
        <div className='modal-container absolute top-0'>
          <button
            onClick={() => addSliderIndex()}
            className='modal-btn absolute top-1/2 right-0 translate-x-4 bg-white rounded-full'
          >
            <NextIcon />
          </button>
          <button
            onClick={() => minusSliderIndex()}
            className='modal-btn absolute top-1/2 left-0 -translate-x-4 bg-white rounded-full'
          >
            <PreviousIcon />
          </button>
          <button
            onClick={() => setShowModalImages(false)}
            className='p-2 absolute top-0 right-0 -translate-y-10'
          >
            <svg
              className='fill-clDarkgrayishblue hover:fill-clOrange transition-colors scale-150'
              width='14'
              height='15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
                fillRule='evenodd'
              />
            </svg>
          </button>
        </div>

        <div className='flex justify-between px-5 mt-16'>
          {productImages.map(({ thumbnail }, index) => {
            return (
              <div
                key={index}
                className={`thumbnail ${
                  bigHeaderIndex === index && "thumbnail-seleckted"
                }`}
              >
                <img
                  className='rounded-xl h-full w-full'
                  onClick={() => {
                    setBigHeaderIndex(index)
                    setSliderIndex(index)
                  }}
                  src={thumbnail}
                  alt={title}
                />
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
export default ProductImagesModal
