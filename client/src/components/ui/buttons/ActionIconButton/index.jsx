import { StyledActionIconButton, StyledPrimaryIcon } from './style';
import './styles.css';

const ActionIconButton = ({ children, label, ...props }) => {
  return (
    <StyledActionIconButton {...props}>
      <StyledPrimaryIcon className="icon-button__icon">
        {children}
      </StyledPrimaryIcon>
      <span className="icon-button__label">{label}</span>
    </StyledActionIconButton>
  );
};

export default ActionIconButton;
