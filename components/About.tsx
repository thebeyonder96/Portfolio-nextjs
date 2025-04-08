"use client";
import React from 'react'
import SectionHeading from './Heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

const About = () => {
    const { ref } = useSectionInView('About');

    return (
        <motion.section className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                As a passionate Software Developer, I find myself constantly exploring the ever-evolving landscape of web development. My journey in tech is driven by a dual love: creating seamless, interactive user experiences on the frontend while architecting robust, secure systems on the backend. I&apos;m like a digital craftsman who enjoys both designing the façade of a building and engineering its foundation.
            </p>
            <p className='mb-3'>
                There&apos;s something deeply satisfying about designing secure authentication systems, optimizing database queries, and creating elegant solutions to complex business problems. When faced with challenging data processing requirements, I&apos;m not afraid to dive into stored procedures and database optimization, believing that sometimes the best solution lies closer to the data.
            </p>
            <p className='mb-3'>
                My commitment to continuous learning keeps me at the forefront of technology, while my practical experience helps me choose the right tools for each unique challenge. Every project is an opportunity to push boundaries, improve performance, and create something that makes a difference in users&apos; lives.
            </p>
        </motion.section>
    );
}

export default About;
