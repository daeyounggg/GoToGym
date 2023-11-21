import { useTranslation } from 'react-i18next';
import React from 'react';

const UnAuthorized = () => {
  const { t } = useTranslation();

  return <h1>{t('접근 권한이 없는 페이지 입니다.')}</h1>;
};

export default React.memo(UnAuthorized);
