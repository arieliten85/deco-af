import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// Componente del submenú
export const SubMenu = ({ isOpen, links }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div className="py-1">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
