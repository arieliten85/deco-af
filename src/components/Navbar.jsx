import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuRef = useRef(null); // Referencia al submenú
  const menuRef = useRef(null); // Referencia al menú

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  // Maneja clics fuera del submenú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex w-full justify-between">
            <Logo w="100px" h="50px" />

            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8 justify-between items-center">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </a>
              <div className="relative" ref={subMenuRef}>
                <button
                  onClick={toggleSubMenu}
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  Productos
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isSubMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        <a
                          href="/productos/nuevo"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Lámparas Colgantes
                        </a>
                        <a
                          href="/productos/destacados"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Cartelería Corpórea
                        </a>
                        <a
                          href="/productos/ofertas"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Señalizaciones
                        </a>
                        <a
                          href="/productos/ofertas"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Merchandising
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </a>
            </nav>
          </div>
          <div className="flex items-center sm:hidden">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
            ref={menuRef}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </a>
              <div>
                <button
                  onClick={toggleSubMenu}
                  className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                >
                  Productos
                  <ChevronDown className="h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isSubMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4"
                    >
                      <a
                        href="/productos/nuevo"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Lámparas Colgantes
                      </a>
                      <a
                        href="/productos/destacados"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Cartelería Corpórea
                      </a>
                      <a
                        href="/productos/ofertas"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Señalizaciones
                      </a>
                      <a
                        href="/productos/ofertas"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Merchandising
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
