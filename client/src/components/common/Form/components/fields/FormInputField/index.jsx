import { useFormField } from './hooks';
import FormInputFieldContext from './context';
import { FormInput, FormPasswordInput, FormFieldError } from './components';

const FormInputField = ({
  children,
  name,
  inputId,
  inputRef,
  inputType,
  maxLength,
  ...props
}) => {
  const { field, isInvalid, errorMessage } = useFormField(name);

  return (
    <div {...props}>
      <label htmlFor={inputId}>{children}</label>
      <FormInputFieldContext.Provider
        value={{ field, inputId, inputRef, isInvalid, maxLength }}
      >
        {inputType === 'password' ? (
          <FormPasswordInput />
        ) : inputType === 'email' ? (
          <FormInput type="email" />
        ) : (
          <FormInput />
        )}
      </FormInputFieldContext.Provider>
      <FormFieldError>{errorMessage}</FormFieldError>
    </div>
  );
};

export default FormInputField;
