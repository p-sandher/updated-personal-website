import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import {skillCategories, experiences} from '../constants/index.js';
import CTA from '../components/CTA'

const About = () => {

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Puneet
        </span>{" "}
        👋🏽
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I&apos;m a Software Engineer at Munich Re and currently pursuing my Master&apos;s in Computer Science at Georgia Tech, specializing in Machine Learning. I graduated from the University of Guelph with a degree in Software Engineering and a minor in Project Management. I&apos;m also a Certified Associate in Project Management (CAPM) and was recognized as Co-op Student of the Year.
        </p>
        <p>
          I&apos;ve previously worked at Dayforce and the Royal Bank of Canada, gaining experience across different areas of software development. At Munich Re, I work on backend systems for an AI-powered insurance underwriting application. I&apos;ve also conducted machine learning research alongside researchers and veterinarians at the Ontario Veterinary College, developing computer vision tools to make reviewing capsule endoscopy footage more efficient.
        </p>
        <p>
          I&apos;m particularly interested in software engineering, AI, and machine learning. I enjoy tackling interesting technical problems, learning new technologies, and seeing how the things I build can be useful in practice. I&apos;m always happy to connect and hear about what others are working on.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Technical Skills.</h3>

        {skillCategories.map((category) => (
          <div className='mt-6' key={category.name}>
            <h4 className='font-poppins font-semibold text-lg text-black-500'>{category.name}</h4>
            <ul className='mt-3 flex flex-wrap gap-2'>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className='rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium leading-6 text-blue-600'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='pt-10'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-6 flex'>
          <VerticalTimeline layout='1-column-left' className='experience-timeline'>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.title}-${experience.date}`}
                dateClassName='!hidden'
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
                <div className='experience-heading'>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <p className='experience-date'>{experience.date}</p>
                </div>

                <ul className='mt-3 mb-0 list-disc ml-5 space-y-1.5'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-600 font-normal pl-1 text-[15px] leading-6'
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
