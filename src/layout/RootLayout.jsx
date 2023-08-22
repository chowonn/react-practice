import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <HeaderBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
