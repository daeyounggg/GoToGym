import LoginForm from '../../components/member/LoginForm';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { loginProcess } from '../../api/member/login';

const LoginContainer = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
      };

      const _errors = {};
      setErrors(() => _errors);
      let hasError = false; // 검증 실패 여부
      for (const field in requiredFields) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] || [];

          _errors[field].push(requiredFields[field]);

          hasError = true;
        }
      }

      if (hasError) {
        setErrors(() => _errors);

        return;
      }

      // 로그인 처리
      loginProcess(form)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    },
    [form, t],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;

    setForm((form) => ({ ...form, [target.name]: target.value }));
  }, []);
  return (
    <>
      <LoginForm onSubmit={onSubmit} onChange={onChange} errors={errors} />
    </>
  );
};

export default React.memo(LoginContainer);
