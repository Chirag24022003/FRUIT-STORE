import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import ResponsiveMenu from './Navbar/ResponsiveMenu';


// const NavbarMenu = [
//   {
//     id: 1,
//     title: 'Home',
//     link: '/Banner',
//   },
//   {
//     id: 2,
//     title: 'Products',
//     link: '/Banners2',
//   },
//   {
//     id: 3,
//     title: 'About',
//     link: '/',
//   },
//   {
//     id: 4,
//     title: 'Shop',
//     link: '#',
//   },
//   {
//     id: 5,
//     title: 'Contact',
//     link: '#',
//   },
// ]
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className='top-0 left-0 right-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='container flex justify-between items-center py-4 md:pt-4 bg-black'
        >
          {/* Logo */}
          <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
            <p className='text-primary'>FRUIT</p>
            <p className='text-secondary'>STORE</p>
            <FaLeaf className='text-green-700' />
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-5 text-white'>
              {['Home', 'About', 'Product', 'Shop', 'Contact'].map((label, idx) => {
                const path = ['/', '/Banners', '/Banners2', '/Banners3', '/Contact'][idx];
                return (
                  <li key={label}>
                    <Link to={path} className='focus:text-[#d1fa02] hover:text-primary duration-200'>
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <MdOutlineShoppingCart />
              </li>
            </ul>
          </div>

          {/* Hamburger for Mobile */}
          <button className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl text-white' />
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Component */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
