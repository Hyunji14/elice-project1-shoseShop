import { Outlet } from 'react-router-dom';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
