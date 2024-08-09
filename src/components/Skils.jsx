import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];


const conatinerVariants = {
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0, transition:{
    duration:1,
    staggerChildren:0.5,

  }},
}

const itemVariants = {
  hidden:{opacity:0, y:-20},
  visible:{
    opacity:1,
    transition:{
      duration:0.5
    }
  }
}

const Skils = () => {
  return (
    <div className='container mx-auto' id='skills'>
      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      trasnition={{duration:1}}
      className='mb-12 mt-20 text-center text-4xl'>
        Skills
      </motion.h2>

      <motion.div 
      initial="hidden"
      whileInView={"visible"}
      variants={conatinerVariants}
      viewport={{once:true}}
      className='mx-2 flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30'>
        {
          SKILLS.map((item, index) => (
            <motion.div
            variants={itemVariants}

            key={item.name} className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''}`}>
                <div className='flex items-center'>
                    {
                      item.icon
                    }
                    <h3 className='px-6 text-lg lg:text-2xl'>
                      {
                        item.name
                      }
                    </h3>
                </div>

                <div className='text-md font-semibold lg:text-xl'>
                      <span>{item.experience}</span>
                </div>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Skils