import { useCallback, useEffect, useRef, useState } from 'react';

const useFormPasswordInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const focus = useCallback(() => {
    if (isFocused) {
      inputRef.current.focus();
      setIsFocused(false);
    }
  }, [isFocused]);

  useEffect(() => {
    focus();
  }, [focus]);

  const [type, setType] = useState('password');

  const showPassword = useCallback(() => {
    setType('text');
    setIsFocused(true);
  }, []);

  const hidePassword = useCallback(() => {
    setType('password');
    setIsFocused(true);
  }, []);

  return { type, inputRef, showPassword, hidePassword };
};

export default useFormPasswordInput;
