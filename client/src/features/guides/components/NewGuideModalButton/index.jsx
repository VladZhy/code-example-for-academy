import { ActionIconButton, Form, Modal } from './components';
import { useNewGuideModalButton } from './hooks';
import { FaPlus } from 'react-icons/fa';

const NewGuideModalButton = () => {
  const [
    isModalOpen,
    setIsModalOpen,
    handleOpenModal,
    formProps,
    inputRef,
    errorMessage,
  ] = useNewGuideModalButton();

  return (
    <>
      <ActionIconButton label="New guide" onClick={handleOpenModal}>
        <FaPlus />
      </ActionIconButton>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <Modal.Header>New guide</Modal.Header>
        <Modal.Body>
          <Form props={formProps}>
            <Form.InputField
              name="title"
              inputId="title"
              inputRef={inputRef}
              maxLength="100"
            >
              Title
            </Form.InputField>
            <Form.TextareaField
              name="description"
              textareaId="description"
              maxLength="500"
            >
              Description
            </Form.TextareaField>
            {/* dropzone */}
            <Modal.Body.CloseModalButton>Cancel</Modal.Body.CloseModalButton>
            <Form.SubmitButton>Create</Form.SubmitButton>
            <Form.ResponseMessage type="error">
              {errorMessage}
            </Form.ResponseMessage>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewGuideModalButton;
