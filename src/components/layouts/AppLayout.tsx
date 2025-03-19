import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from '../common/ScrollToTop';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default AppLayout;
