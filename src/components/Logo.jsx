import logo from "../assets/logo.jpeg";

export const Logo = ({ width, height }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className="h-8 w-auto sm:h-10"
      style={{ width, height }}
    />
  );
};
