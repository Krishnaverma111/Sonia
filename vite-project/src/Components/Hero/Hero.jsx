import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { IoLogoLinkedin } from "react-icons/io5";
import logo from "../../assets/images/soniya..png";
// import PdfFile from "../../assets/pdf/krishna Resume.pdf";

export default function Hero() {


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'Krishna.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 p-6 min-h-screen'>


      <div className='w-full md:w-1/2 flex flex-col items-start gap-6'>

        <TypeAnimation
          className='text-gray-500 text-xl sm:text-2xl'
          sequence={[
            1000,
            'Amazon Auditor',
            1000,
            'Quality Analyst',
            1000,
            'Data Validator',
            1000,
            'SOP Specialist',
            1000,
            'Error Tracker',
            1000,
            'Compliance Checker',
            1000,
            'Audit Trail Expert',
            1000,
            'Detail-Oriented',
            1000,
            'Operational Excellence',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />


        <h1 className='text-3xl sm:text-4xl font-bold'>Hey, I Am</h1>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-fuchsia-700'>sonia Kaushik</h1>

        <p className='text-base sm:text-lg text-white'>
          I have 1 year of professional experience as an Auditor at Amazon, with a strong focus on quality assurance, data accuracy, and process improvement. Currently, I am working in a respected position at Hartron Skill Center in Assandh.
        </p>


        <div className='flex items-center gap-4 flex-wrap'>
          <button
            className='border-2 px-4 py-2 rounded-xl shadow-lg shadow-fuchsia-700 transform transition-transform duration-500 hover:scale-110 cursor-pointer'
            onClick={handleDownload}
          >
            Download CV
          </button>

          <a href="https://www.linkedin.com/in/sonia-sharma-117474218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">  <IoLogoLinkedin className='text-3xl sm:text-4xl cursor-pointer transition-transform hover:scale-110' /></a>
        </div>
      </div>


      <div className='w-full md:w-1/2 flex justify-center'>
        <img className='w-64 sm:w-80 md:w-[400px] h-auto object-contain rounded-lg' src={logo} alt="Krishna Verma" />
      </div>
    </div>
  );
}