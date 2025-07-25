import React from 'react';
import { FaFileExcel, FaFileWord, FaFilePowerpoint, FaMicrosoft } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocalPostOffice } from "react-icons/md";
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaFileExcel className="text-4xl text-green-600" />, name: 'Excel' },
  { icon: <FaFileWord className="text-4xl text-blue-600" />, name: 'Word' },
  { icon: <FaFilePowerpoint className="text-4xl text-red-500" />, name: 'PowerPoint' },
  { icon: <FaMicrosoft className="text-4xl text-orange-600" />, name: 'Microsoft Office' },
  { icon: <SiGmail className="text-4xl text-red-500" />, name: 'Gmail' },
  { icon: <MdLocalPostOffice className="text-4xl text-yellow-500" />, name: 'Mailbox' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 200
    }
  })
};

export default function Skills() {
  return (
    <Element name='skill'>
      <motion.div
        className="flex justify-center px-10 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col gap-4 items-center">
          <motion.h1
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h1>

          <motion.p
            className="text-lg text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tools I use for reception and office work.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true }}
              >
                {skill.icon}
                <span className="text-white font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
