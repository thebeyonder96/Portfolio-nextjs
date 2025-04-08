"use client"
import React from 'react'
import SectionHeading from './Heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "framer-motion";
import { sendMail } from '@/actions/sendEmail';
import SubmitBtn from './Submit-Btn';
import toast from 'react-hot-toast';

const Contact = () => {
    const {ref} = useSectionInView('Contact')
  return (
    <motion.section id="contact"
    initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:akshaynew45@gmail.com">
        akshaynew45@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action={async (formdata)=>{
        const {error} = await sendMail(formdata)
        if(error){
          toast.error(error)
        }
        toast.success('Email sent successfully')
      }} className="mt-10 flex flex-col dark:text-black">
        <input 
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white/80 dark:focus:bg-white/90 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={100}
        autoComplete='off'
        placeholder="Your email" />
        <textarea 
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/80 dark:focus:bg-white/90 transition-all dark:outline-none"
        name="message"
        autoComplete='off'
        placeholder="Your message"
        required
        maxLength={5000}></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}

export default Contact