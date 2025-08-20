import React from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { Link } from 'react-router';
import { MdDashboard, MdOutlineSettings } from "react-icons/md";

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);
   const userData = JSON.parse(localStorage.getItem("userDetail"));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl border-b border-gray-200 px-4 py-3 mx-3 rounded-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img 
              src="ShoesLog.jpg" 
              alt="Logo" 
              className="h-10 sm:h-12 w-auto mix-blend-multiply" 
            />
          </Link>
          <div className="flex">
            <p className="text-xl sm:text-2xl font-bold">Shoes</p>
            <p className="text-orange-700 text-xl sm:text-2xl font-bold">Alive</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`w-full sm:w-auto ${menuOpen ? "block" : "hidden"} sm:flex items-center gap-4`}>
          <div className="flex items-center gap-3 w-full sm:w-auto mt-3 sm:mt-0">
            
             {userData.role == "admin" && (
          <NavLink to="/dashboard">
           
            <MdDashboard className="text-2xl md:text-3xl text-gray-600" />
          </NavLink>
        )}

            <div
              className="text-2xl text-gray-700 hover:text-orange-600 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart />
            </div>
            
            
            <NavLink 
              to="/setting" 
              className="text-3xl text-gray-700 hover:text-orange-600"
            >
              <MdOutlineSettings />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
