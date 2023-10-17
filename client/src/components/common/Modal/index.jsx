import { useModal } from './hooks';
import ModalContext from './context';
import { ModalHeader, ModalBody } from './components';
import { StyledDialog } from './style';

const Modal = ({ children, isOpen, setIsOpen, ...props }) => {
  const { dialogRef, closeDialog, handleClickOutsideDialog } = useModal(
    isOpen,
    setIsOpen
  );

  return (
    <StyledDialog
      ref={dialogRef}
      onCancel={closeDialog}
      onClick={handleClickOutsideDialog}
      {...props}
    >
      <ModalContext.Provider value={{ closeDialog }}>
        {children}
      </ModalContext.Provider>
    </StyledDialog>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
