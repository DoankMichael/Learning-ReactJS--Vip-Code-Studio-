import Button from "../Elements/Button";
import PropTypes from "prop-types";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-xs bg-gray-800 shadow border border-gray-700 rounded-lg mx-2 my-2 flex  flex-col justify-between">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}...</h5>
        <p className="text-s text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">$ {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.propTypes = {
  children: PropTypes.array.isRequired,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
};

Body.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
