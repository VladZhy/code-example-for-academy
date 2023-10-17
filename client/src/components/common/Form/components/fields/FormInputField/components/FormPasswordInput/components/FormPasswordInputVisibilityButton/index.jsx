import { StyledButtonWrapper, StyledSecondaryIcon } from './style';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './styles.css';

const FormPasswordInputVisibilityButton = ({
  isHidden,
  showPassword,
  hidePassword,
}) => {
  return (
    <StyledButtonWrapper className="form-password-input-visibility-button">
      <StyledSecondaryIcon className="form-password-input-visibility-button__icon">
        {isHidden ? (
          <AiFillEyeInvisible
            alt="Show password"
            title="Show password"
            onClick={showPassword}
          />
        ) : (
          <AiFillEye
            alt="Hide password"
            title="Hide password"
            onClick={hidePassword}
          />
        )}
      </StyledSecondaryIcon>
    </StyledButtonWrapper>
  );
};

export default FormPasswordInputVisibilityButton;
