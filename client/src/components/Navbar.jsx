import { Link } from "react-router-dom"
import { FaPen } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='flex justify-between text-xl px-5 max-w-5xl mx-auto max-sm:text-base max-sm:max-w-sm pt-2'>
      <div className="flex gap-3 font-bold">
        <FaPen className="mt-1.5"/>
        <Link to='/'>MyBlog</Link>
      </div>
      <div className="flex gap-3 text-gray-700">
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
    </nav>
  )
}
export default Navbar