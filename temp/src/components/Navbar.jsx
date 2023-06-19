import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    
    <div className="flex min-h-[100px] flex-col justify-between">
    <nav className="flex h-14 justify-between shadow-md items-center px-4 bg-white  ">
    <Link className="text-lg font-bold " to="/"> <img src="./icons8-sun.gif" alt="" /> </Link>
        <Link className={`text-lg font-light ${pathname==="/create" ? ('border-black border-b-4'):('bg-transparent')}`} to="/create">Create</Link>
        <Link className={`text-lg font-light ${pathname==="/read" ? ('border-black border-b-4'):('bg-transparent')}`} to="/read">
        Read
        </Link>
        <Link className={`text-lg font-light ${pathname==="/maxtemp" ? ('border-black border-b-4'):('bg-transparent')}`} to="/maxtemp">
        Maxtemp
        </Link>
        <Link className={`text-lg font-light ${pathname==="/mintemp" ? ('border-black border-b-4'):('bg-transparent')}`} to="/mintemp">
        Mintemp
        </Link>
        <Link className={`text-lg font-light ${pathname==="/search" ? ('border-black border-b-4'):('bg-transparent')}`} to="/search">
        Search City
        </Link>
    </nav>
    </div>
  
  )
}
export default Navbar