import Logo from '@/components/Logo';
import Nav from './Nav';

function HeaderBar() {
  return (
    <header className="bg-[#F14F39] w-auto h-[70px] flex items-center -mt-1 justify-center">
      <Logo />
      <Nav />
    </header>
  );
}

export default HeaderBar;
