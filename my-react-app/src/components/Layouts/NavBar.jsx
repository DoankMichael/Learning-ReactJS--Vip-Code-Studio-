import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode.jsx";
import { TotalPrice } from "../../context/TotalPriceContext.jsx";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useContext(TotalPrice);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
      {" "}
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5 ">
        Item : {totalCart} | Price : ${total}{" "}
      </div>
      <Button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default NavBar;
