import LoginForm from '../../components/member/LoginForm';
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loginProcess, getLoginInfo } from '../../api/member/login';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../modules/user';
import cookie from 'react-cookies';

const LoginContainer = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {
    state: { isLogin },
    action: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  useEffect(() => {
    if (isLogin) {
      // 로그인한 경우는 접근 불가
      navigate(-1);
    }
  }, [isLogin, navigate]);

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
        .then((result) => {
          if (result && typeof result.success === 'undefined') {
            // 로그인 성공
            setErrors(() => {});
            setForm({});
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            // 로그인 처리
            cookie.save('token', result, {
              path: '/',
              expires,
            });

            getLoginInfo()
              .then((userInfo) => {
                setUserInfo(userInfo);
                setIsLogin(true);
                navigate('/');
              })
              .catch((err) => console.error(err));
          } else {
            // 로그인 실패
            setErrors(() => ({ global: t('Login_fail') }));
          }
        })
        .catch(() => setErrors(() => ({ global: t('Login_fail') })));
    },
    [form, t, setIsLogin, setUserInfo],
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
