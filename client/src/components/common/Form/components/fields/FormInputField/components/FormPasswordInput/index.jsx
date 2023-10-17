import { useFormPasswordInput } from './hooks';
import { FormPasswordInputVisibilityButton, FormInput } from './components';
import './styles.css';

const FormPasswordInput = () => {
  const { type, inputRef, showPassword, hidePassword } = useFormPasswordInput();

  return (
    <div className="form-password-input-container">
      <FormInput type={type} ref={inputRef} className="form-password-input" />
      <FormPasswordInputVisibilityButton
        isHidden={type === 'password'}
        showPassword={showPassword}
        hidePassword={hidePassword}
      />
    </div>
  );
};

export default FormPasswordInput;
