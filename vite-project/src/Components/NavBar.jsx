import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const navmenu = [
    { href: "about", name: "About" },
    { href: "skill", name: "Skill" },
    { href: "Contact", name: "Contact" },
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    closed: {
      x: '-100%',
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 text-white py-6 px-6 backdrop-blur-md bg-black bg-opacity-50'>
      <div className='flex items-center justify-between max-w-[1300px] mx-auto'>
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Nav */}
        <ul className='hidden md:flex gap-8 text-lg'>
          {navmenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                offset={50}
                duration={500}
                className='cursor-pointer'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.div
          className='md:hidden z-50 cursor-pointer'
          onClick={toggleMenu}
          whileTap={{ rotate: 90 }}
        >
          {open ? <RxCross2 size={30} /> : <FaBars size={30} />}
        </motion.div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className='fixed top-0 left-0 w-full min-h-screen bg-gray-900 text-white z-40 p-6'
            >
              <motion.ul
                className='flex flex-col items-center justify-center gap-8 text-2xl mt-24'
              >
                {navmenu.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link
                      to={item.href}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={closeMenu}
                      className='cursor-pointer'
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
