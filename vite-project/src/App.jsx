import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero/Hero';
import Mytechstack from './Components/Mytechstack';
import Skills from './Components/Skills';
import Experience from "./Components/Experience/Experience";
import AboutMe from './Components/AboutMe';

export default function App() {
  return (
    <div
      className=""
      style={{
        backgroundColor: 'rgb(30, 30, 60)',  // 👈 Updated to RGB color
        color: 'white',
        minHeight: '100vh', // Optional: ensures full-screen background
      }}
    >
      <NavBar />
      <Hero />
      <Mytechstack />
      <Skills />
      <Experience />
      <AboutMe />
    </div>
  );
}
