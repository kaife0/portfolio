import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      < motion.div initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: "spring", stiffness: 100}}>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
          width={128} // Specify width
          height={128} // Specify height
        />
      </motion.div>

      {/* Introduction Heading */}
      <motion.h3  initial={{y:-20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Md kaif
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          className="w-6"
          width={24} // Specify width
          height={24} // Specify height
        />
      </motion.h3>

      {/* Title */}
      <motion.h1
      initial={{y:-30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}} className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend developer
      </motion.h1>

      {/* Description */}
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer currently pursuing Bachelor's in computer science and engineering.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
        initial={{y:-30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow Icon"
            className="w-4"
            width={16} // Specify width
            height={16} // Specify height
          />
        </motion.a>

        {/* My Resume Button */}
        <motion.a
          initial={{y:-30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          href="/CV_kaif.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
            width={16} // Specify width
            height={16} // Specify height
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
