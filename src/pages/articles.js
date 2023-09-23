import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import article3  from "../../public/images/articles/create modal component in react using react portals.png";

const FramerImage = motion(Image);

const MovingImg = ({titel, img, link}) =>{

    return(
        <Link href={link} target="_blank" ><h2 className='capitalize text-xl font-semibold hover:underline'>{titel}</h2></Link>
    )
}


const Article = ({img, titel, date, link}) => {
     return(
        <li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light
        '>
          <MovingImg titel={titel} img={img} link={link}/>
          <span className='text-primary font-semibold pl-4 dark:text-primaryDark'>{date}</span>
        </li>

     )
}



const FeaturedArticls =({img,title,time,summary,link}) => {
       return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl '>
            
           <Link href={link}
           target="_blank"
           className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
           >
           <Image src={img} alt={title} className="w-full h-auto" />
           </Link> 
           <Link href={link} target="_blank">
            <h2 className='capitalize text-2x1 font-bold my-2 mt-4 hover:underline xs:text-lg'> {title}</h2>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibol'></span>
           </Link>
        </li>
       )
}

const  Articals  = () => {
    return(

        <>
          <Head>

       
           
            <title>TechTeam | Articals Page</title>
            <meta name="description" content="any description" />

           
            
          </Head>
          <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className= "mb-16  lg:!text-7x1 sm:mb-8 sm:!text-6x1 xs:!text-4x1" />
                <ul className='grid grid-cols-2 gap-16  lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticls 
title="Build A Custom Pagination Component In Reactjs From Scratch"
summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."                    
time="9 min read"
link="/" 
img={article1}                   
                    
                    />
                        <FeaturedArticls 
                       title="Build A Custom Pagination Component In Reactjs From Scratch"
                      summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."                    
                       time="9 min read"
                          link="/" 
                           img={article2}                   
                    
                    />        
                </ul>  
                <h2 className='font-blod text-4xl w-full text-center my-16 mt-32'> All Articals</h2> 
                <ul>
                <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                />  
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                 <Article
                  titel="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling" 
                  date="March 22,2023" 
                  link="/"
                  img={article3}
                /> 
                

                </ul> 
            </Layout>
          </main>

        </>

    );
};

export default Articals