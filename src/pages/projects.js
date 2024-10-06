import AnimatedText from '@/components/AnimatedText'
import React from 'react'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from "../../public/images/projects/sales_analysis.png";
import project2 from "../../public/images/projects/agency-website-cover-image.png";
import project3 from "../../public/images/projects/devdreaming.png";
import project4 from "../../public/images/projects/fashion-studio-website.png";
import project5 from "../../public/images/projects/nft-collection-website-cover-image.png";
import project6 from "../../public/images/projects/portfolio-cover-image.png";
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl 
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs-rounded-br-3xl xs:p-4
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs-rounded-[1.5rem]
        ' />

        <Link 
          href={link} 
          target="_blank"
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-[400px] object-cover" // Enforce the same size for all images
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        </Link>


        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link> 
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>    
        <Link href={link} target="_blank"
        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
        dark:bg-light dark:text-dark 
        sm:px-4 sm:text-base
        '
        
        > Visit Project </Link>    
        </div>  
        </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    
    return(
         <article className="w-full flex flex-col items-center justify-center rounded-2xl
         border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 
         ">

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] 
        ' />

        <Link 
          href={link} 
          target="_blank"
          className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-[250] h-[600px] object-cover" // Enforce the same size for all images
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
      


        <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link 
              href={"https://github.com/iclectic/V1.0"} 
              target="_blank" 
              className='hover:underline underline-offset-2'
            >
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link> 
       
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link 
            href={link} 
            target="_blank"
            className='text-lg font-semibold underline md:text-base'
        > 
         Visit Project
        </Link> 
         <Link href={github} target="_blank" className='w-8 md:w-6'> 
           <GithubIcon />{" "}
        </Link>    
          
        </div>  
        </div>
         </article> 
    )
}

const projects = () => {
  return(
    <>
      <Head>
        <title>Ibim Braide | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Sharpening one's imagination and fostering creativity are catalysts for development and progress." 
className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'            
            
            />

        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap:y-24 sm:gap-x-0'>
            <div className='col-span-12'>
                    <FeaturedProject 
                    title="Retail Sales Data"
                    img={project1}
                    summary="The Sales Analysis project on GitHub is a comprehensive resource for retail 
                    sales data analysis. It features a dataset containing various transaction details, 
                    customer demographics, and sales figures, which can be used for data cleaning and 
                    SQL querying exercises. The repository includes a schema for creating a retail sales 
                    table and several SQL query examples for data exploration, cleaning, and analysis, 
                    such as identifying total sales and best-selling months. "
                    link="https://github.com/iclectic/sales-analysis"
                    github="/"
                    type="Featured Project"
                    />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                    title="Lavish Website"
                    img={project2}
                    summary="Responsive website designed with ReactJS ."
                    link="https://github.com/iclectic/V1.0"
                    github="/"
                    type="Featured Project"
                    />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                    title="Ecommerce Web App"
                    img={project3}
                    summary="The website was meticulously designed utilizing a combination of Hypertext Markup Language (HTML), Cascade Style Sheet (CSS), Javascript, Firebase, Node.js, and Express.js. The primary objectives of the project were to ensure users could easily set up an account and log in using the same registration details, make purchases post-login, and effortlessly add products to the Ecommerce platform for sale. The implementation involved a thoughtful integration of these technologies to achieve a seamless and user-friendly online shopping experience."
                    link="https://github.com/iclectic/Ecommerce-store-Web-App"
                    github="/"
                    type="Featured Project"
                    />
            </div>
            <div className='col-span-12'>
            <FeaturedProject 
                    title="Restaurant Website"
                    img={project4}
                    summary="This sample HTML and Sass restaurant landing page showcases a straightforward and sophisticated design aimed at highlighting the restaurant's brand and services. The website structure comprises a navbar, header, about us, and gallery sections. The navbar incorporates a toggleable hamburger menu containing links for Home, About Us, Gallery, Reservation, Services, and Contact. The header displays the brand logo, name, a welcoming message, and a reservation call-to-action button. The About Us section provides an introduction to the restaurant, its services, a star rating, and an option to explore more. In the Gallery section, a visually appealing collection of restaurant food items is presented, each featuring a card with details like name, price, and an order button."
                    link="https://github.com/iclectic/Website-for-Restaurant-SASS"
                    github="/"
                    type="Featured Project"
                    />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                    title="Flight Widget"
                    img={project5}
                    summary="The Automatic Flight Widget is a JavaScript-powered tool designed to showcase a dynamic table of flights, complete with their details and remarks. The table undergoes automatic updates every 5 seconds to reflect new flights, while simultaneously removing the outdated ones. Using this widget is straightforward—just open the index.html file in your web browser, and the flight table will commence its automatic generation and updates at 5-second intervals.

                    Noteworthy features include the storage of flight details in a JavaScript array, facilitating easy additions, removals, or modifications of flights. The dynamic generation of flight details using JavaScript, coupled with their presentation in an HTML and CSS-based table, adds to the widget's versatility. Additionally, the flight details are animated with a flip effect using CSS, enhancing the overall user experience."
                    link="https://github.com/iclectic/flight-widget"
                    github="/"
                    type="Featured Project"
                    />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project 
                    title="Responsive Website Built With Bootstrap"
                    img={project6}
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    link="https://github.com/iclectic/Responsive-Website"
                    github="/"
                    type="Featured Project"
                    />
            </div>
        </div>
        </Layout>
      </main>
    </>
  )
}

export default projects