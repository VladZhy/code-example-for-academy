import { useFormField } from './hooks';
import { FormFieldError } from './components';
import { StyledFormTextarea } from './style';

const FormTextareaField = ({
  children,
  name,
  textareaId,
  textareaRef,
  maxLength,
  ...props
}) => {
  const { field, isInvalid, errorMessage } = useFormField(name);

  return (
    <div {...props}>
      <label htmlFor={textareaId}>{children}</label>
      <StyledFormTextarea
        id={textareaId}
        ref={textareaRef}
        $isInvalid={isInvalid}
        maxLength={maxLength}
        {...field}
      />
      <FormFieldError>{errorMessage}</FormFieldError>
    </div>
  );
};

export default FormTextareaField;
