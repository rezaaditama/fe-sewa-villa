import MobileMenu from '../components/Navbar/HamburgerBar';
import HamburgerBar from '../components/Navbar/HamburgerBar';
import Navbar from '../components/Navbar/Navbar';
import Beranda from '../layout/Beranda';
import VillaKami from '../layout/VillaKami';

const LandingPage = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      {/* <Beranda></Beranda> */}
      {/* <VillaKami></VillaKami> */}
      <HamburgerBar></HamburgerBar>
      {/* <MobileMenu></MobileMenu> */}
    </div>
  );
};

export default LandingPage;
