import { CardIcon, MenuIcon } from "./Icons"
import logo from "../assets/images/logo.svg"
import userImage from "../assets/images/image-avatar.png"
import { useGlobalContext } from "../Context"
const Navbar = () => {
  const { setShowSidebar } = useGlobalContext()
  return (
    <nav>
      <div className='p-4 px-6 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <button onClick={() => setShowSidebar(true)}>
            <MenuIcon />
          </button>
          <img src={logo} alt='logo' />
        </div>
        <div className='flex items-center space-x-6'>
          <CardIcon />
          <img className='h-7' src={userImage} alt='user-avatar' />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
