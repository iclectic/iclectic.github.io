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
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>A Bit About Me</h2>
          <p className='my-4 font-medium'>
          However, my interests extend beyond the digital and athletic domains. I have a culinary curiosity, constantly exploring and mastering the art of cooking diverse cuisines. From experimenting with new recipes to savoring the intricacies of flavors, my kitchen is a canvas for culinary creativity.

          When it comes to entertainment, my movie tastes reflect a mix of classic and action-packed genres. I have a special fondness for the timeless Karate Kid series and the adrenaline-pumping Mission Impossible movies, from the first installment to the latest, including Mission Impossible Dead Reckoning and The Hundred Foot Journey.
          </p>
                  </div>
           <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
           bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
           '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
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