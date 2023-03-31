import { useGlobalContext } from "../Context"
import { CloseIcon } from "./Icons"
const Sidebar = () => {
  const { setShowSidebar, showSiderbar } = useGlobalContext()
  return (
    <aside
      className={`sidebar absolute left-0 top-0 bg-clBlack bg-opacity-60 w-full h-full z-20 ${
        showSiderbar && "show-sidebar"
      }`}
    >
      <div
        className={`sidebar-content bg-clWhite h-full w-2/3 p-6 py-5 space-y-12  ${
          showSiderbar && "show-sidebar-content"
        }`}
      >
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
