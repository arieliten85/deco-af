import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SubMenu } from "./SubMenu";
import { subMenuLinks } from "../constants/subMenuLinks";
import { Logo } from "../common/UIComponents";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      // Cerrar el submenú cuando se cierra el menú principal
      if (!newState) {
        setIsSubMenuOpen(false);
      }
      return newState;
    });
  }, []);

  const toggleSubMenu = useCallback(() => {
    setIsSubMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsSubMenuOpen(false); // Cerrar el submenú si se hace clic fuera
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <Logo w="100px" h="50px" />
          </Link>

          {/* Navegación para pantallas grandes */}
          <nav className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-400">
              Inicio
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsSubMenuOpen(true)}
              onMouseLeave={() => setIsSubMenuOpen(false)}
            >
              <p className=" cursor-pointer text-gray-600  inline-flex items-center">
                Productos <ChevronDown className="ml-1 h-4 w-4" />
              </p>
              <SubMenu isOpen={isSubMenuOpen} links={subMenuLinks} />
            </div>
            <Link to="/about" className="text-gray-600 hover:text-gray-400">
              Acerca de
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-400">
              Contacto
            </Link>
          </nav>

          {/* Menú móvil */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
            ref={menuRef}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-start">
              <Link
                to="/"
                className=" px-2 py-2 text-gray-400 hover:text-gray-300"
              >
                Inicio
              </Link>
              <div>
                <p
                  onClick={toggleSubMenu}
                  className="px-2 py-2 cursor-pointer text-gray-400  inline-flex items-center"
                >
                  Productos <ChevronDown className="ml-1 h-4 w-4" />
                </p>
                <SubMenu isOpen={isSubMenuOpen} links={subMenuLinks} />
              </div>
              <Link
                to="/about"
                className=" px-2 py-2 text-gray-400 hover:text-gray-300"
              >
                Acerca de
              </Link>
              <Link
                to="/contact"
                className=" px-2 py-2 text-gray-400 hover:text-gray-300"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
