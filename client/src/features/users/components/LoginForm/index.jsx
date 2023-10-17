import { Form } from './components';
import { useLoginForm } from './hooks';

const LoginForm = () => {
  const [props, errorMessage] = useLoginForm();

  return (
    <Form props={props}>
      <Form.InputField name="username" inputId="username">
        Username
      </Form.InputField>
      <Form.InputField name="password" inputId="password" inputType="password">
        Password
      </Form.InputField>
      <Form.ResponseMessage type="error">{errorMessage}</Form.ResponseMessage>
      <Form.SubmitButton>Log in</Form.SubmitButton>
    </Form>
  );
};

export default LoginForm;
