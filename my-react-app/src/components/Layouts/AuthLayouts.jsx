import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode.jsx";

const AuthLayouts = (props) => {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="text-3xl mb-2 font-bold text-blue-500">{title}</h1>
        <p className="font-medium text-slate-600 mb-8">Welcome, please enter your details.</p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "Login" ? "Don't have an account? " : "Already have an account? "}
          {type === "Login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "Register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};
AuthLayouts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
export default AuthLayouts;
