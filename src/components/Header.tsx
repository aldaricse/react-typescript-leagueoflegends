import { useState } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi';

const Header = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <header>
      <nav className='navbar'>
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <Link to={'/'} className="navbar-brand flex items-center gap-2">
              <img src={Logo} alt="Logo lol" className='logo' />
              <h1>MAINGG</h1>
            </Link>
            <div
              className={`navbar-collpase ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
              <ul className="navbar-nav flex gap-4">
                <li><Link to="/champions" onClick={handleCloseNav}>CHAMPIONS</Link></li>
                <li><Link to="/favorites" onClick={handleCloseNav}>MY FAVORITES</Link></li>
              </ul>
            </div>
            <button
              className="hamburger space-y-2 sticky lg:hidden z-50 lg:z-0"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {
                isNavOpen ?
                  <HiOutlineX className="text-3xl" />
                  :
                  <HiMenuAlt1 className="text-3xl" />
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header