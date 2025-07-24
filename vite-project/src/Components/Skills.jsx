import React from 'react';
import { FaFileExcel, FaFileWord, FaFilePowerpoint, FaMicrosoft } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocalPostOffice } from "react-icons/md";
import { Element } from 'react-scroll';

const skills = [
  { icon: <FaFileExcel className="text-4xl text-green-600" />, name: 'Excel' },
  { icon: <FaFileWord className="text-4xl text-blue-600" />, name: 'Word' },
  { icon: <FaFilePowerpoint className="text-4xl text-red-500" />, name: 'PowerPoint' },
  { icon: <FaMicrosoft className="text-4xl text-orange-600" />, name: 'Microsoft Office' },
  { icon: <SiGmail className="text-4xl text-red-500" />, name: 'Gmail' },
  { icon: <MdLocalPostOffice className="text-4xl text-yellow-500" />, name: 'Mailbox' },
];

export default function Skills() {
  return (
    
    <Element name='skill'>
      <div className="flex justify-center px-10 py-6">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold text-center">Skills</h1>
          <p className="text-lg text-center">Tools I use for reception and office work.</p>

          <div className="grid grid-cols-2 gap-4 bg-gray-800 p-4 rounded-lg">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                {skill.icon}
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
