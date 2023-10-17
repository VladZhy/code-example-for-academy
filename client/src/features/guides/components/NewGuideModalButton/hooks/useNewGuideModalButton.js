import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import validationSchema from '../validationSchema';
import { useCreateGuideMutation } from '../../../api';
import { useNavigate } from 'react-router-dom';

const useNewGuideModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendCreateGuideRequest] = useCreateGuideMutation();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenModal = useCallback((e) => {
    setIsModalOpen(true);
    e.currentTarget.blur();
  }, []);

  const initialValues = useMemo(() => {
    return {
      title: '',
      description: '',
      thumbnail: '',
    };
  }, []);

  const handleCreateNewGuide = useCallback(
    async (formValues) => {
      try {
        const { title, description, thumbnail } = formValues;

        await sendCreateGuideRequest({
          title,
          description,
          thumbnail,
        }).unwrap();

        navigate('/');
      } catch (error) {
        setErrorMessage(error?.data?.message || error?.error);
      }
    },
    [sendCreateGuideRequest, navigate]
  );

  const formProps = useMemo(() => {
    return {
      initialValues,
      validationSchema,
      onSubmit: handleCreateNewGuide,
    };
  }, [initialValues, handleCreateNewGuide]);

  useEffect(() => {
    if (isModalOpen) {
      inputRef?.current?.focus();
    }
  }, [isModalOpen]);

  return [
    isModalOpen,
    setIsModalOpen,
    handleOpenModal,
    formProps,
    inputRef,
    errorMessage,
  ];
};

export default useNewGuideModalButton;
