import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        smooth
        color="#174A9E"
      />
    </>
  );
};

export default AppLayout;
