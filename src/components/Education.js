import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null);
    return( 
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
              {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}



const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>

        <div ref ={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div
    style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "/> 

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details
                type="Master of Science in Computer Science" 
                time="2022-2023"
                place="Birmingham City University"
                info="The program strengthened my computer science expertise through various modules. 
                'Software Development' refined my programming skills, while 'Software Analysis and Design' 
                covered engineering life cycles. Additionally, the curriculum included 
                'AI Fundamentals' and 'Research Methods and Project Management', culminating in an 
                'Individual Masters Project' that applied my skills to real world research."
                />
                <Details
                type="British Computer Society Certificate in IT "
                time="2021"
                place="Compunet Limited"
                info="In the Information Systems syllabus, I studied computer and network technology, data management, 
                requirements analysis, and quality assurance, emphasising database design and the systems development 
                life cycle. The Software Development module covered programming fundamentals, algorithm design, and 
                testing principles."
                />
                <Details
                type="Bachelor of Engineering in Computer Engineering" 
                time="2009-2015"
                place="University of Benin"
                info="During my Bachelor of Engineering in Computer Engineering at the University of Benin, I gained expertise 
                in analyzing, planning, and designing computer systems, encompassing hardware, software, networks, and multimedia. 
                The curriculum included practical lab work and a SIWES (Students Industrial Work Experience Scheme) for real-world 
                application of theoretical concepts."
                />  
            </ul>
        </div>
    </div>
  )
}


export default Education