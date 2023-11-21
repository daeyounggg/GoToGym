import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { getLoginInfo } from './api/member/login';
import FrontLayout from './layouts/front/CommonLayout';
import NotFound from './pages/commons/NotFound';
import Main from './pages/front/Main';
import Login from './pages/front/member/Login';
import Join from './pages/front/member/Join';
import UserContext from './modules/user';

const App = () => {
  /* 로그인 유지 처리 S */
  const {
    action: { setUserInfo, setIsLogin },
  } = useContext(UserContext);

  getLoginInfo()
    .then((userInfo) => {
      setUserInfo(userInfo);
      setIsLogin(true);
    })
    .catch((err) => console.log(err));
  /* 로그인 유지 처리 E */

  return (
    <Routes>
      <Route path="/" element={<FrontLayout />}>
        <Route index element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
