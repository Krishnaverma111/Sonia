import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';

export default function AboutMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  // Animation variants
  const leftFadeVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const rightFadeVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const successVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  return (
    <Element name='Contact'>
      <div className="flex flex-wrap justify-around items-start p-6 gap-6 min-h-screen bg-transparent">

        {/* About Section */}
        <motion.div
          className="max-w-md"
          variants={leftFadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-semibold mb-4 text-white">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Dedicated and enthusiastic professional with 1 year of experience in the quality department at Amazon.
            Currently working as a receptionist at Hartron Skill Centre, Assandh. 
            Known for strong communication skills, discipline, and the ability to manage front-desk operations efficiently.
            Eager to grow in a dynamic environment and continuously learn new skills for future opportunities.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="shadow-md rounded-md p-6 w-full max-w-md bg-[rgb(40,40,80)]"
          variants={rightFadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl mb-4 text-white">Let's Connect!</h2>

          <form
            action="https://formsubmit.co/soniasharmagcalewa@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            target="_blank"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting me! I will get back to you soon."
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 border border-gray-500 rounded h-32 bg-gray-800 text-white placeholder-gray-400"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {isSubmitted && (
              <motion.p
                className="text-green-400 font-semibold mt-2"
                variants={successVariant}
                initial="hidden"
                animate="visible"
              >
                ✅ Message Sent Successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </Element>
  );
}
