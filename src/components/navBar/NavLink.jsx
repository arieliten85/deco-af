import { Link } from "react-router-dom";

export const NavLink = ({ href, label }) => (
  <Link
    to={href}
    className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
  >
    {label}
  </Link>
);
