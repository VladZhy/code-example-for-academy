import { useFormInputFieldContext } from '../../context';
import { StyledFormInput } from './style';

const FormInput = ({ ...props }) => {
  const { field, inputId, inputRef, isInvalid, maxLength } =
    useFormInputFieldContext();

  return (
    <StyledFormInput
      id={inputId}
      ref={inputRef}
      $isInvalid={isInvalid}
      maxLength={maxLength}
      {...field}
      {...props}
    />
  );
};

export default FormInput;
