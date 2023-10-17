import { useModalContext } from '../../../../context';
import { StyledButton } from './style';

const CloseModalButton = ({ children, ...props }) => {
  const { closeDialog } = useModalContext();

  return (
    <StyledButton onClick={closeDialog} {...props}>
      {children}
    </StyledButton>
  );
};

export default CloseModalButton;
