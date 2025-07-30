import React, { useRef} from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText';
// import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
// import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion'; 
// import article3 from "../../public/images/articles/create modal component in react using react portals.png";
// import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
// import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/coming-soon.png";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    
   
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);

    }

    function handleMouseLeave(event){
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
      

    }


  return (
    <Link href={link} target="_blank"
    
    onMouseMove = {handleMouse}
    onMouseLeave = {handleMouseLeave}
    
    >

    <h2 className="capitalize text-xl font-semibold hover:underline">
      {title}
    </h2>
    <FramerImage 
    style={{ x:x, y:y }}
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration: 0.2}}}
    
    ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" />
    </Link>
  );
};

const Article = ({img, title, date, link}) => {
  return(
    <motion.li 
      initial={{y:200}}
      whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"} }}
      viewport={{once: true}}
      className="relative w-full p-6 my-6 rounded-2xl flex items-center justify-between bg-white/90 text-black dark:text-light shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-light sm:flex-col group"
    >
      <MovingImg title={title} img={img} link={link} /> 
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
}


const FeaturedArticle = ({img, title, time, summary, link}) =>{
  return(
    <li className='relative col-span-1 w-full p-6 bg-white/95 border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl dark:bg-gray-900 dark:border-gray-700 transition-shadow'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-indigo-100 dark:bg-indigo-900 opacity-20 pointer-events-none' />    
      <Link 
        href={link} 
        target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-xl'
      >
        <FramerImage src={img} alt={title} className="w-full h-auto rounded-xl" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg main-title">{title}</h2>
      </Link> 
      <p className='text-base mb-2 text-gray-700 dark:text-gray-300'>{summary}</p> 
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  );
};

// Centralized article data
const articlesData = [
  {
    id: 1,
    title: "A Step-by-Step Guide to Creating Python Virtual Environments",
    summary: "This comprehensive guide outlines the essential steps for setting up isolated virtual environments in Python. The article addresses the core problem of managing dependencies and versions, providing scenarios where conflicts arise and how virtual environments offer a solution. It covers the installation process, creating a virtual Python environment within a project directory, and the crucial steps to activate and deactivate the environment. The guide is a practical resource for developers seeking to manage dependencies effectively, avoid conflicts, and ensure the smooth functioning of multiple applications with varying library requirements.",
    date: "2025-07-25T10:00:00+01:00",
    readTime: "17 min read",
    img: article6,
    link: "/"
  },
  {
    id: 2,
    title: "React Hooks",
    summary: "This informative piece unravels the mysteries of React Hooks, offering a lucid comprehension of their importance in contemporary React development. It dives into the basics of React Hooks, elucidating how they simplify state management and lifecycle methods, turning functional components into potent entities. The guide supplies practical examples and detailed instructions on incorporating various hooks like useState, useEffect, and useContext. Whether you're a novice or a seasoned React developer, this article serves as an invaluable guide, demystifying React Hooks and empowering you to elevate the functionality and maintainability of your React applications.",
    date: "2025-07-20T15:30:00+01:00",
    readTime: "12 min read",
    img: article6,
    link: "/"
  },
  // Add more articles as needed
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    summary: "A deep dive into closures in JavaScript, how they work, and practical use-cases.",
    date: "2025-07-10T09:00:00+01:00",
    readTime: "8 min read",
    img: article6,
    link: "/"
  },
  {
    id: 4,
    title: "Building Responsive Layouts with CSS Grid",
    summary: "Learn how to use CSS Grid to create responsive and modern web layouts.",
    date: "2025-06-30T13:45:00+01:00",
    readTime: "10 min read",
    img: article6,
    link: "/"
  },
  {
    id: 5,
    title: "Getting Started with Next.js",
    summary: "A beginner's guide to building fast, SEO-friendly React apps with Next.js.",
    date: "2025-06-25T11:15:00+01:00",
    readTime: "9 min read",
    img: article6,
    link: "/"
  },
  {
    id: 6,
    title: "Introduction to TypeScript for JavaScript Developers",
    summary: "Why you should consider TypeScript for your next project and how to get started.",
    date: "2025-06-20T18:00:00+01:00",
    readTime: "11 min read",
    img: article6,
    link: "/"
  }
];

const archiveThreshold = 5; // Show archive if more than 5 articles

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleString('en-GB', options);
}

const articles = () => {
  // Sort articles by date (newest first)
  const sortedArticles = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sortedArticles.slice(0, 2);
  const regular = sortedArticles.slice(2);
  const showArchive = sortedArticles.length > archiveThreshold;

  return (
    <>
      <Head>
        <title>Ibim Braide | Articles Page</title>
        <meta name="description" content="Blog articles by Ibim Braide" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Articles" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl main-title" />

          {/* Featured Articles */}
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {featured.map(article => (
              <FeaturedArticle
                key={article.id}
                title={article.title}
                summary={article.summary}
                time={`${article.readTime} • ${formatDate(article.date)}`}
                link={article.link}
                img={article.img}
              />
            ))}
          </ul>

          {/* Regular Articles */}
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul className="mt-8">
            {regular.map(article => (
              <Article
                key={article.id}
                title={article.title}
                date={formatDate(article.date)}
                link={article.link}
                img={article.img}
              />
            ))}
          </ul>

          {/* Archive Menu */}
          {showArchive && (
            <div className="mt-12 w-full max-w-2xl mx-auto bg-white/90 dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 main-title">Archive</h3>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {sortedArticles.slice(archiveThreshold).map(article => (
                  <li key={article.id} className="flex justify-between items-center py-2">
                    <span className="text-base font-medium">{article.title}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{formatDate(article.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
}


export default articles