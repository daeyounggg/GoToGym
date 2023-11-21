import Header from '../../outlines/admin/Header';
import Footer from '../../outlines/admin/Footer';
import { Outlet } from 'react-router-dom';
import AdminOnly from '../../components/commons/auth/AdminOnly';

const CommonLayout = () => {
  return (
    <AdminOnly>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AdminOnly>
  );
};

export default CommonLayout;
