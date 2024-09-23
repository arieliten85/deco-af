export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2   bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`px-4 w-full py-2 border rounded focus:outline-none ${className}`}
      {...props}
    />
  );
};
export const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`px-4 w-full py-2 border rounded focus:outline-none ${className}`}
      {...props}
    />
  );
};
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
