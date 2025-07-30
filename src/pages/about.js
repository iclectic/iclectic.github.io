import React, { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/photo-moi.png";
import { useInView, useSpring, useMotionValue } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
  if(isInView){
    motionValue.set(value);
  }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })

}, [springValue, value])



     return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
                <title>Ibim Braide | About Page</title>
                <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
     <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Aspiration!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
          <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-black dark:text-light'>A Bit About Me</h2>
          <p className='my-4 font-medium text-black dark:text-light'>
          My interests extend beyond the digital and athletic realms. I have a 
          passion for culinary exploration and am constantly experimenting with 
          different types of cuisine. I can confidently say I am a true foodie.

          I love reading, particularly social and historical genres, and I have 
          a fascination with numbers, which has led to my obsession with mathematics. 
          I am fluent in English, and as the son of a diplomat, I have lived in two 
          different countries during my formative years, apart from my home country 
          of Nigeria. Currently, I reside in a third country, England 
          (the United Kingdom).
          </p>
                  </div>
           <div className="col-span-3 relative h-max flex items-center justify-center xl:col-span-4 md:order-1 md:col-span-8">
            <div className="relative group w-full aspect-square flex items-center justify-center rounded-full overflow-hidden shadow-xl border-4 border-solid border-dark bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-800 dark:via-dark dark:to-gray-900 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <Image 
                  src={profilePic}
                  alt="Profile Picture"
                  className="object-cover w-full h-full rounded-full transition-all duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
            </div>
          </div>
               
          
            </div>
        
            <Experience />
            <Education />
        </Layout>    
     </main>
    </>
  )
}
  

export default about