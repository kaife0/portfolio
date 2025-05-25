"use client";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && 
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setIsDarkMode(true);
      }
    }
  }, []);

  // Apply the theme
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "";
      }
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen pb-20 pt-32 dark:bg-darkTheme dark:text-white">
      <div className="w-full px-[8%] md:px-[12%]">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={assets.arrow_icon}
              alt="Back to home"
              className="w-4 rotate-180"
            />
            <span className="font-Ovo">Back to home</span>
          </Link>
          
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="flex items-center gap-2">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="w-6"
            />
            <span className="font-Ovo hidden md:inline">
              {isDarkMode ? "Light mode" : "Dark mode"}
            </span>
          </button>
        </div>
        
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-Ovo text-center mb-8"
        >
          My Project Collection
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 font-Ovo"
        >
          Explore all of my web development projects showcasing a range of technologies and solutions
          I've built throughout my journey as a frontend developer.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden shadow-md h-full flex flex-col"
                >
                  <div 
                    className="aspect-video bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  ></div>
                  
                  <div className="p-5 flex-grow flex flex-col bg-white dark:bg-darkHover dark:text-white">
                    {project.featured && (
                      <span className="bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-100 text-xs px-2 py-1 rounded-full mb-2 w-fit">
                        Featured
                      </span>
                    )}
                    <h2 className="font-semibold text-xl mb-2 font-Ovo">{project.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500 dark:text-gray-400">View project</span>
                      <div className="border rounded-full border-black dark:border-white w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-white group-hover:bg-lime-300 transition">
                        <Image src={assets.send_icon} alt="View project" className="w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
