import Header from '../../outlines/admin/Header';
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
  );
};

export default CommonLayout;
