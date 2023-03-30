import { CloseIcon } from "./Icons"
import { useGlobalContext } from "../Context"
const Sidebar = () => {
  const { setShowSidebar } = useGlobalContext()
  return (
    <aside className='absolute left-0 top-0 bg-clBlack bg-opacity-75 w-full h-full'>
      <div className='bg-clWhite h-full w-2/3 p-6 py-5 space-y-12'>
        <button onClick={() => setShowSidebar(false)}>
          <CloseIcon />
        </button>
        <ul className='space-y-5 font-bold text-clVerydarkblue text-lg'>
          <li>
            <a href='#'>Collections</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar
