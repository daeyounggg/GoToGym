import Header from '../../outlines/admin/Header';
<<<<<<< HEAD
import Footer from '../../outlines/admin/Footer';
import { Outlet } from 'react-router-dom';
import AdminOnlyContainer from '../../containers/admin/AdminOnlyContainer';

const CommonLayout = () => {
  return (
    <AdminOnlyContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AdminOnlyContainer>
=======
import { Outlet, useLocation } from 'react-router-dom';
import AdminOnly from '../../components/commons/auth/AdminOnly';
import Side from '../../outlines/admin/Side';

const CommonLayout = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  path.shift();
  let mainClass = path.join('_');
  mainClass = mainClass ? `${mainClass}_page` : 'main_page';
  return (
    <AdminOnly>
      <Header />
      <main className={`admin_page ${mainClass}`}>
        <Side />
        <section>
          <Outlet />
        </section>
      </main>
    </AdminOnly>
>>>>>>> support
  );
};

export default CommonLayout;
