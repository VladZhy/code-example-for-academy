import { Form as FormikForm, Formik } from 'formik';
import {
  FormInputField,
  FormTextareaField,
  FormResponseMessage,
  FormSubmitButton,
  FormSubmitButtonPropsProvider,
} from './components';

const Form = ({ children, props }) => {
  return (
    <Formik {...props}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

Form.InputField = FormInputField;
Form.TextareaField = FormTextareaField;
Form.ResponseMessage = FormResponseMessage;
Form.SubmitButton = FormSubmitButton;
Form.SubmitButtonPropsProvider = FormSubmitButtonPropsProvider;

export default Form;
