import AccountSettingsForm from '../features/users/components/AccountSettingsForm';
import './styles.css';

const AccountSettingsPage = () => {
  return (
    <div className="form-container">
      <h1>Account Settings</h1>
      <AccountSettingsForm />
    </div>
  );
};
export default AccountSettingsPage;
