import { useModalContext } from '../../context';
import {
  StyledModalHeaderContainer,
  StyledButtonWrapper,
  StyledSecondaryIcon,
} from './style';
import { LuX } from 'react-icons/lu';
import './styles.css';

const ModalHeader = ({ children }) => {
  const { closeDialog } = useModalContext();

  return (
    <StyledModalHeaderContainer>
      <p className="modal-header__title">{children}</p>
      <StyledButtonWrapper>
        <StyledSecondaryIcon className="modal-header__close-button-icon">
          <LuX alt="Close" title="Close" onClick={closeDialog} />
        </StyledSecondaryIcon>
      </StyledButtonWrapper>
    </StyledModalHeaderContainer>
  );
};

export default ModalHeader;
