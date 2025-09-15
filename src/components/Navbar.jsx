import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      
      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center font-bold text-lg shadow-md hover:scale-105 transition-transform duration-300"
      >
        <span className="blue-gradient_text">AKB</span>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex gap-8 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1 transition-all duration-300"
              : "text-gray-800 hover:text-blue-500 transition-colors duration-300"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1 transition-all duration-300"
              : "text-gray-800 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1 transition-all duration-300"
              : "text-gray-800 hover:text-blue-500 transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
