import { Form } from './components';
import { useAccountSettingsForm } from './hooks';

const AccountSettingsForm = () => {
  const [props, response] = useAccountSettingsForm();

  return (
    <Form props={props}>
      <Form.InputField name="username" inputId="username" maxLength="16">
        Username
      </Form.InputField>
      <Form.InputField name="email" inputId="email" inputType="email">
        Email
      </Form.InputField>
      <Form.InputField
        name="password"
        inputId="password"
        inputType="password"
        maxLength="16"
      >
        Password
      </Form.InputField>
      <Form.InputField
        name="confirmPassword"
        inputId="confirm-password"
        inputType="password"
        maxLength="16"
      >
        Confirm password
      </Form.InputField>
      <Form.ResponseMessage type={response.type}>
        {response.message}
      </Form.ResponseMessage>
      <Form.SubmitButton>Save</Form.SubmitButton>
    </Form>
  );
};

export default AccountSettingsForm;
