import React from "react"
import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"
import project from  "../../public/images/projects/crypto-screener-cover-image.jpg"

const FeaturedProject =({type, title, summary, img, link, github }) => {

     return(
      <article className='w-fu;; flex items-center justify-between relative rounded-be-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12  dark:bg-dark dark:border-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      '>
        
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light' />
    
           <Link href={link}
           target="_blank"
           className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
           >
           < Image src={img} alt={title} className="w-full h-auto" 
           whileHover={{scale:1.05}}
           transition={{duration:0.2}}

           priority 
           sizes="(max-width: 768px) 100vw,
           (max-width:1200px) 50vw, 50vw"
           />
          
           </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
              <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>

              <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
              <h2 className='my-2 w-full text-left text-4xl font-blod dark:text-light sm:text-sm'>{title}</h2>
              </Link>
              <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
              <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /></Link>
                <Link href={link} target="_blank" 
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                sm:px-4 sm:text-base
                '
                > Visit Project </Link>
              </div>
            </div>

      </article>
     )
}
const Projects =({type, title, summary, img, link, github }) => {

  return(
   <article className='w-full flex flex-col items-center justify-center rounded-2xl
   border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
   '>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light rounded-br-3x1 xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem' />
        <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-full lg:pl-0 lg:pt-6'
        >
        < Image src={img} alt={title} className="w-full h-auto" />
         
         </Link>

         <div className='w-full flex flex-col items-start justify-between mt-6'>
           <span className='text-primary font-medium text-xl'>{type}</span>

           <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
           <h2 className='my-2 w-full text-left text-3xl font-blod'>{title}</h2>
           </Link>
           <div className='w-full mt-2 flex items-center justify-between'>
             <Link href={github} target="_blank" className='w-8'> <GithubIcon /></Link>
             <Link href={link} target="_blank" 
             className='text-lg font-semibold underline'
             > Visit </Link>
           </div>
         </div>

   </article>
  )
}
const Project = () => {
  return (
    <>
      <Head>
       

        <title>TechTeams | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
               <AnimatedText text="Imagination Trumps Knowledge!" 
               className='mb-16 lg:!text-7x1 sm:mb-8 sm:!text-6x1 xs:!text-4x1'  
               />
               <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                  <FeaturedProject 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
                  
                  />
                </div>

                <div className='col-span-6'>
                <Projects 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
             />
                </div>
                <div className='col-span-6'>  <Projects 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
             /> </div>

                <div className="col-span-12"> <Projects 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
             /></div>

                <div className='col-span-6'> <Projects 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
             /></div>
                <div className='col-span-6'> <Projects 
title="Crypto Screener Application"    
 img={project}             
summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
link="/"
github="/"
type="Featured Project"
             /></div>


               </div>
          </Layout>
      </main>
    </>
  )
}

export default Project;
