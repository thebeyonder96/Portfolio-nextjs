"use client";
import React from 'react'
import { projectsData } from "@/lib/data";
import SectionHeading from './Heading';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';


const Projects = () => {
  const {ref} = useSectionInView('Projects',0.4)
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28 relative'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects