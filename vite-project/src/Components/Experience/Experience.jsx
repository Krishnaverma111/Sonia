import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experienceData = [
    {
      title: "Hartron Skill Center, Assandh",
      duration: "2024 - Present",
      description: "Currently working in the reception position, handling student coordination, documentation, and support services at the center."
    },
    {
      title: "Amazon",
      duration: "2023 - 2024",
      description: "Worked as an Auditor focused on quality assurance, data accuracy, compliance checks, and process improvement within operational teams."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.div
      className="flex justify-center p-4  text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="w-full max-w-xl">
        <motion.h1
          className="text-center text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h1>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 bg-gray-800 rounded-xl p-4 shadow-md mb-4"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-white">{exp.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
