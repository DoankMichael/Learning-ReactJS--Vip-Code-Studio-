import PropTypes from "prop-types";
const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};
export default Button;
