import { NavLink } from 'react-router-dom';

const HamburgerBar = () => {
  const NavbarLinks = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-yellow-500 font-bold text-lg border-b border-gray-300 pb-2'
      : 'hover:text-yellow-600 transition border-b border-gray-300 pb-2';
  return (
    <div className='font-semibold text-base bg-gray-100 min-h-screen w-2/5 pt-22 border-r border-gray-200 flex flex-col space-y-2 md:hidden'>
      <img
        src='/public/image/logo.png'
        alt='Logo'
        className='w-24 self-center'
      />
      <div className='w-full grid grid-cols-2 px-2 gap-2'>
        <NavLink
          to='/register'
          className='bg-yellow-500 text-white font-bold text-center rounded-xl py-0.5 border border-yellow-400 hover:bg-yellow-600 text-sm'
        >
          Sign In
        </NavLink>
        <NavLink
          to='/login'
          className='border-black border-1 text-center font-semibold rounded-xl py-0.5 text-sm hover:text-yellow-500 hover:border-yellow-500 hover:font-bold'
        >
          Sign Up
        </NavLink>
      </div>
      <div className='w-full flex flex-col px-5 space-y-3'>
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
    </div>
  );
};

export default HamburgerBar;
