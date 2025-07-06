import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavbarLinks = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-yellow-500 font-bold text-xl'
      : 'hover:text-yellow-600 transition';

  return (
    <nav className='border-b border-gray-300 fixed top-0 w-full flex justify-between items-center py-2 px-5 bg-gray-100 z-50'>
      <div className='flex items-center gap-2'>
        <img src='/image/logo.png' alt='Logo' className='h-12 md:h-16' />
        <h1 className='font-bold text-yellow-500 text-2xl visible md:hidden'>
          Darzayed Villa
        </h1>
      </div>
      <div className='flex gap-5 text-lg items-center font-semibold'>
        <NavLink to='/' className={NavbarLinks}>
          Home
        </NavLink>
        <NavLink to='/villa' className={NavbarLinks}>
          Villa
        </NavLink>
        <NavLink to='/reservasi' className={NavbarLinks}>
          Reservation
        </NavLink>
      </div>
      <div className='flex gap-5 text-xl items-center'>
        <NavLink
          to='/login'
          className='border-black border-1 px-6 font-semibold rounded-xl py-1 hover:text-yellow-500 hover:border-yellow-500 hover:font-bold'
        >
          Sign Up
        </NavLink>
        <NavLink
          to='/register'
          className='bg-yellow-500 text-white font-bold px-6 rounded-xl py-1 border border-yellow-400 hover:bg-yellow-600'
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
