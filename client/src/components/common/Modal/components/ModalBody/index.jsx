import { CloseModalButton } from './components';

const ModalBody = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

ModalBody.CloseModalButton = CloseModalButton;

export default ModalBody;
