import './styles.css';

const FormInputError = ({ children }) => {
  return children && <p className="form-input-error">{children}</p>;
};

export default FormInputError;
