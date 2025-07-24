import React from 'react';
import { motion } from 'framer-motion';
import { FaRegFileExcel } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocalPostOffice } from "react-icons/md";

export default function Mytechstack() {
  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const icons = [
    { Icon: FaRegFileExcel, color: "text-green-700" },
    { Icon: FaFileWord, color: "text-blue-700" },
    { Icon: MdLocalPostOffice, color: "text-yellow-700" },
    { Icon: SiGmail, color: "text-yellow-700" },
  ];

  return (
    <div className='flex justify-center py-10'>
      <div className='flex gap-6 items-center flex-wrap'>
        <h1 className='text-xl font-bold text-gray-800'>My Tech Stack</h1>

        {icons.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={iconVariants}
          >
            <Icon className={`text-5xl ${color} cursor-pointer`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
