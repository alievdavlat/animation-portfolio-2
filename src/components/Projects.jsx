import React from "react";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:1}} className="mb-8 text-center text-3xl lg:text-4xl">Projects</motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-3xl"
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1}}
            whileHover={{
              scale:1.0
            }}
            >
            <motion.img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{
                scale:1.1
              }}

            />
            <motion.div 
              initial={{opacity:0}}
              whileHover={{opacity:1}}
              transition={{duration:0.5}}
            className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-xl">{item.name}</h3>
              <p className="mb-12 p-4">{item.description}</p>
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-4 text-black hover:bg-gray-300">
                <div className="flex items-center">
                    <span>View on Github</span>
                    <MdArrowOutward/>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;