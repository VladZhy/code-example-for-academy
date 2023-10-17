import { useFormikContext } from 'formik';
import { SubmitButton } from './components';

const FormSubmitButton = ({ children, ...props }) => {
  const { dirty, isSubmitting, errors } = useFormikContext();

  return (
    <SubmitButton
      isSubmitting={isSubmitting}
      disabled={!dirty || isSubmitting || Object.keys(errors).length}
      {...props}
    >
      <span>{children}</span>
    </SubmitButton>
  );
};

export default FormSubmitButton;
