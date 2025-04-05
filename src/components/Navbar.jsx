import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from './Navbar/ResponsiveMenu';
import { motion } from 'framer-motion';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '#',
  },
  {
    id: 3,
    title: 'About',
    link: '#',
  },
  {
    id: 4,
    title: 'Shop',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  },
]
const Navebar = () => {
  const [open , setOpen] = React.useState(false);
  return (
    <>
      <nav className=' top-0 left-0 right-0 '>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='container flex justify-between items-center py-4 md:pt-4  bg-black'>
          {/* Logo section  */}
          <div className='text-2xl flex item gap-2 font-bold uppercase'>

            <p className='text-primary'>FRUIT</p>
            <p className='text-secondary'>STORE</p>
            <FaLeaf className='text-green-700 ' />
          </div>

          {/* Menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-5  text-white'>
              {NavbarMenu.map((menu) => (
                <li key={menu.id} >
                  <a href={menu.link}
                    className=' inline-block hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                  >{menu.title}</a>
                </li>
              ))}
              <div className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <MdOutlineShoppingCart />
              </div>
            </ul>
          </div>

          {/* Mobile Hamburger Menu section */}

          <button className='md:hidden' onClick={() => setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </button>
        </motion.div>
      </nav>
      {/* Mobile Menu Section*/}
      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navebar;