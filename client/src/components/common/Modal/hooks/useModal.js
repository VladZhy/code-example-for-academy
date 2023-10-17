import { useCallback, useEffect, useRef } from 'react';

const useModal = (isOpen, setIsOpen) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleClickOutsideDialog = useCallback(
    (e) => {
      const dialogDimensions = dialogRef.current.getBoundingClientRect();

      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeDialog();
      }
    },
    [closeDialog]
  );

  return { dialogRef, closeDialog, handleClickOutsideDialog };
};

export default useModal;
