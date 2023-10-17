import { useField } from 'formik';
import { useMemo } from 'react';

const useFormField = (name) => {
  const [field, meta] = useField(name);

  const isInvalid = useMemo(() => meta.touched && meta.error, [meta]);

  const errorMessage = useMemo(() => {
    return isInvalid ? meta.error : null;
  }, [isInvalid, meta.error]);

  return { field, isInvalid, errorMessage };
};

export default useFormField;
