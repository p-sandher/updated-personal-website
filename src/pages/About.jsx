import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import {skills, experiences, libraries, tools} from '../constants/index.js';
import CTA from '../components/CTA'

const About = () => {

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Puneet
        </span>{" "}
        👋🏽
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a third-year student at the University of Guelph, where I study software engineering with a minor in project management. 
          I am always exploring new approaches to coding, algorithm design, and application development.
          My educational background and personal projects have given me a solid foundation in both the theory and practice of software engineering, from developing small mobile applications to contributing to large-scale software projects.
          I thrive when tackling technical challenges in environments that foster innovation and demand pushing the boundaries.
          If you are looking for someone who is enthusiastic about technology and eager to make an impact, let's connect!
          <br></br>I am currently seeking internship opportunities for <b>Fall 2024</b>.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <h4 className='text-slate-800 font-semibold mt-4 text-xl'>Languages</h4>
        <div className='mt-8 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        <h4 className='text-slate-800 font-semibold mt-4 text-xl'>Libraries</h4>
        <div className='mt-8 flex flex-wrap gap-12'>
          {libraries.map((libraries) => (
            <div className='block-container w-20 h-20' key={libraries.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={libraries.imageUrl}
                  alt={libraries.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        <h4 className='text-slate-800 font-semibold mt-4 text-xl'>Tools</h4>
        <div className='mt-8 flex flex-wrap gap-12'>
          {tools.map((tools) => (
            <div className='block-container w-20 h-20' key={tools.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={tools.imageUrl}
                  alt={tools.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>


      </div>

      <div className='py-13'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            My work experience has a range of technical roles, where I've developed a strong skill set in software engineering and project management, contributing to a range of projects of diffierent levels of complexity and scale.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About
