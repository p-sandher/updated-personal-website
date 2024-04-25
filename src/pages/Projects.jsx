import React from 'react'

import {projects} from '../constants/index'
import CTA from '../components/CTA'
import {arrow} from '../assets/icons'
import { Link } from "react-router-dom";

import githubIcon from '../assets/icons/github.png'

import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      
      <Card className="text-center mt-10" style={{ cursor: 'pointer', backgroundColor: '#1a535c', color: 'white' }}  onClick={() => window.open('https://github.com/p-sandher', '_blank')}>
            <div className='py-2'>
              <Card.Body>
                  <img src={githubIcon} alt="Github" className="mt-5 mx-auto d-block" style={{ width: '80px', height: '80px' }} />

                  <Card.Title style={{ fontSize: '1.5rem' }} className="font-semibold">Check out my GitHub</Card.Title>
                  <Card.Subtitle className="mb-2 text-white-200 font-semibold">@p-sandher</Card.Subtitle>
              </Card.Body>
            </div>
        </Card>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-green-500'>{project.tools}</p>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Link to Repo
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects