import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
const Side = () => {
  const { t } = useTranslation();
  return (
    <aside>
      <ul>
        <li>
          <NavLink
            to="/admin/config"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('사이트 설정')}
          </NavLink>
          <NavLink
            to="/admin/member"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('회원 관리')}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Side;
