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
                info="The Birmingham City University program offered a diverse array of modules, enhancing my expertise in key areas of computer science. 'Software Development' strengthened my programming skills in industry-demand languages, emphasizing programming's pivotal role in steering modern technologies. 'Software Analysis and Design' explored software engineering, focusing on software design throughout the engineering life cycle. 'Database Design and Development' honed my skills in constructing models using standard UML.

                Moreover, the curriculum covered 'Web Application Development', providing comprehensive skills in client-side programming, server-side programming, and backend services. 'Artificial Intelligence Fundamentals' delved into foundational AI concepts, emphasizing its role in machine learning and decision-making across industries. 'Research Methods and Project Management' instilled crucial knowledge in research literature, methodology, ethics, and project management tools.
                
                The program's culmination, the 'Individual Masters Project', allowed me to conduct an in-depth research endeavor aligned with program objectives. This practical project showcased my knowledge application in real-world scenarios, contributing to a holistic understanding of computer science."
                />
                <Details
                type="British Computer Society Certificate in IT "
                time="2021"
                place="Compunet Limited"
                info="In the Information Systems syllabus, I covered topics like data management, statistical measures, requirements analysis, multimedia, and hypermedia. I explored the systems development life cycle, focusing on database design, prototyping, and system 
                development tools. I also gained insights into organizational information flow, personnel considerations, social aspects, and quality assurance methods. In the Software Development syllabus, I focused on fundamental programming concepts, algorithm design, 
                code development, pseudocode, flowcharts, programming paradigms, testing principles, documentation, software quality assurance, and emerging technologies. For the Computer and Network Technology syllabus, I learned about decimal integers   representation, 
                logic gates, sequential logic elements, computer system types, the stored program concept, processor architecture, instruction formats, trends in processor technology, memory hierarchy, peripherals,  operating  systems, multitasking,  system  performance, 
                communication principles, network protocols, communication equipment, security risks, and advances in communication technology."
                />
                <Details
                type="Bachelor of Engineering in Computer Engineering" 
                time="2009-2015"
                place="University of Benin"
                info="During my Bachelor of Engineering in Computer Engineering at the University of Benin, I gained comprehensive knowledge and skills in the analysis, planning, and design of computer systems, encompassing hardware, software, networks for data transmission, and multimedia. The program also emphasized addressing challenges in instrumentation, control, manufacturing, and electronics through the integration of computer capabilities.
                The courses covered a broad spectrum of topics, including electrical machines, computer organization, digital system design, analogue electronic circuits, communication principles, engineering mathematics, electromagnetic fields, software engineering, data communication, network, microprocessor systems, artificial neural networks, reliability and maintainability, microprogramming, digital computer networks, digital signal processing, and computer graphics.
                The curriculum also included practical components with computer laboratories, emphasizing hands-on experience. Additionally, the program incorporated a SIWES (Students Industrial Work Experience Scheme) to provide real-world exposure and application of theoretical concepts."
                />

                
            </ul>
        </div>
    </div>
  )
}


export default Education