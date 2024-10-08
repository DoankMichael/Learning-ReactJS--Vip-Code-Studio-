import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
import PropTypes from "prop-types";
const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});
InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
