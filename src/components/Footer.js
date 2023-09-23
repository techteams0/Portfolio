import React from 'react'
import Layout from "./Layout"
import Link from 'next/link'
import { Linden_Hill } from 'next/font/google'

const Footer = () => {
    return(
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base
        '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build With<span className='text-primary  dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;<Link href="https://techteams.online" className='underline underline-offset-2'>Techteams</Link>
            </div>
            <div>
            <Link href="https://techteams.online" target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
            </div>

            </Layout>    
        </footer>
    )
}


export default Footer



{/* <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
                <div className='flex items-center'>
               Build With <span className='text-primary text-2xl px-1'> &#9825;</span>
               by&nbsp;<link href="https://techteams.online" className='Underline underline-offset-2'>CodeBucks</link>
               </div>
                
                <link href="https://techteams.onlie">Say hello</link>
            </Layout> */}