import React, { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/photo-moi.png";
import { useInView, useSpring, useMotionValue } from 'framer-motion'
import Skills from '@/components/Skills'
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
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
          <p className='font-medium'>
          I am Ibim Mercy Miller Braide, a passionate and multifaceted individual with a background in web development and UI/UX design. Born with a love for technology, I have seamlessly blended my technical skills with a creative flair to craft engaging and user-friendly digital experiences.

          Beyond the world of coding and design, I find joy in the rhythm of basketball and football games, cheering on my favorite teams with enthusiasm. In the realm of sports, I'm not just a spectator – I actively engage in activities like table tennis and running to keep the energy flowing.
          </p>
          <p className='my-4 font-medium'>
          However, my interests extend beyond the digital and athletic domains. I have a culinary curiosity, constantly exploring and mastering the art of cooking diverse cuisines. From experimenting with new recipes to savoring the intricacies of flavors, my kitchen is a canvas for culinary creativity.

          When it comes to entertainment, my movie tastes reflect a mix of classic and action-packed genres. I have a special fondness for the timeless Karate Kid series and the adrenaline-pumping Mission Impossible movies, from the first installment to the latest, including Mission Impossible Dead Reckoning and The Hundred Foot Journey.
          </p>
          <p className='font-medium'>
          In addition to being fluent in English, I have a conversational command of the German language, adding an international touch to my communication skills. This linguistic versatility is a testament to my eagerness to embrace and learn from different cultures.

          As I navigate through the intersection of technology, sports, culinary arts, and entertainment, my journey is marked by a commitment to growth, creativity, and a genuine love for the diverse experiences life has to offer.
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
               
           <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                       <AnimatedNumbers value={2}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                    xs:text-sm'>
                      satisfied clients
                    </h2>
                  </div>

                  <div className='flex flex-col items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                       <AnimatedNumbers value={1}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                    xs:text-sm'>
                      projects completed
                    </h2>
                  </div>

                  <div className='flex flex-col items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                       <AnimatedNumbers value={1}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                    xs:text-sm'>
                      years of experience
                    </h2>
                  </div>

            </div>
            </div>
            <Skills />
            <Experience />
            <Education />
        </Layout>    
     </main>
    </>
  )
}
  

export default about