import { useSelector, useDispatch } from 'react-redux';
import { useUpdateSettingsMutation } from '../../../api';
import { useState, useMemo, useCallback } from 'react';
import { setCredentials } from '../../../slices/auth';
import validationSchema from '../validationSchema';

const useAccountSettingsForm = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [sendUpdateSettingsRequest] = useUpdateSettingsMutation();
  const dispatch = useDispatch();
  const [response, setResponse] = useState({ type: '', message: '' });

  const initialValues = useMemo(() => {
    return {
      username: userInfo.username,
      email: userInfo.email,
      password: '',
      confirmPassword: '',
    };
  }, [userInfo]);

  const getUpdatedSettings = useCallback(
    (formValues) => {
      const settingNames = ['username', 'email', 'password'];
      const updatedSettings = { _id: userInfo._id };

      settingNames.forEach((field) => {
        if (initialValues[field] !== formValues[field]) {
          updatedSettings[field] = formValues[field];
        }
      });

      return updatedSettings;
    },
    [userInfo, initialValues]
  );

  const handleUpdateSettings = useCallback(
    async (formValues, actions) => {
      const updatedSettings = getUpdatedSettings(formValues);

      try {
        const res = await sendUpdateSettingsRequest(updatedSettings).unwrap();
        const { message, ...userCredentials } = res;

        dispatch(setCredentials(userCredentials));
        setResponse({ type: 'success', message });

        actions.resetForm({
          values: {
            username: userCredentials.username,
            email: userCredentials.email,
            password: '',
            confirmPassword: '',
          },
        });
      } catch (error) {
        const message = error?.data?.message || error?.error;

        setResponse({ type: 'error', message });
      }
    },
    [getUpdatedSettings, sendUpdateSettingsRequest, dispatch]
  );

  const getProps = useMemo(() => {
    return {
      initialValues,
      validationSchema,
      onSubmit: handleUpdateSettings,
    };
  }, [initialValues, handleUpdateSettings]);

  return [getProps, response];
};

export default useAccountSettingsForm;
