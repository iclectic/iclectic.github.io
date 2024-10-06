import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
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
              {position}&nbsp;
              <a 
                href={companyLink}
                target="_blank"
                className='text-primary dark:text-primaryDark capitalize'
              >
                @{company}
              </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}



const Experience = () => {
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
            Experience
        </h2>

        <div ref ={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div
    style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "  /> 

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details
                position="Information Technology Support Specialist" company="Frannberry School"
                companyLink="https://www.frannberryschool.org"
                time="2022" address="Lagos State, Nigeria"
                work="I was responsible for setting up and deploying computer hardware and peripherals 
                to optimize their functionality. I diagnosed and resolved software-related issues in 
                computer systems, offering technical assistance and support to the staff at Frannberry 
                School. Additionally, I installed and performed software updates on computers throughout 
                the school."
                />

                <Details
                
                position="Technical Support Engineer" company="Tek Experts"
                companyLink="https://www.tek-experts.com"
                time="2021-2022" address="Lagos State, Nigeria"
                work="I provided remote technical support for Microsoft 365 customers in NOAM and EMEA, 
                resolving Microsoft Entra ID issues, managing identity synchronization, and assisting 
                with user and group management to ensure smooth integration and authentication."
                />

                <Details
                
                position="Mechanical Maintenance Technician (Trainee)" company="Prime Atlantic Cegelec"
                companyLink="https://www.pacenigeria.com"
                time="2019-2021" address="Lagos State, Nigeria"
                work="I maintained and installed pneumatic, hydraulic, and electrical actuators, 
                handled transmission systems, performed metal fabrication, and serviced prime movers."
                />

                <Details
                
                position="Information Technology Support Specialist" company="Frannberry School"
                companyLink="https://www.frannberryschool.org"
                time="2017-2019" address="Lagos State, Nigeria"
                work="I set up and deployed computer hardware, resolved software issues, and provided 
                technical support to staff at Frannberry School, including installing and updating 
                software across school systems."
                />

                <Details
                
                position="Corps Member" company="National Youth Service Corps (NYSC)"
                companyLink="https://www.nysc.gov.ng/.com"
                time="2016-2017" address="Niger State, Nigeria "
                work="I worked on agricultural projects in Lafiaji and Raba, Niger State, under VSO supervision, 
                aimed at improving maize and millet productivity"
                />
            </ul>
        </div>
    </div>
  )
}


export default Experience