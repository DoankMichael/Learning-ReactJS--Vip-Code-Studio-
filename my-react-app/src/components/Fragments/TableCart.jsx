import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DarkMode } from "../../context/DarkMode.jsx";
import { useContext } from "react";
import { TotalPrice, TotalPriceDispatch } from "../../context/TotalPriceContext.jsx";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useContext(TotalPriceDispatch);
  const { total } = useContext(TotalPrice);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: { total: sum },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatch]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table className={`text-left border-separate border-spacing-x-5 table-auto  ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>$ {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                <td>{item.qty}</td>
                <td>$ {(product.price * item.qty).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>$ {total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TableCart.propTypes = {
  products: PropTypes.array.isRequired,
};

export default TableCart;
