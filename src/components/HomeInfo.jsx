import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
      <p className="font-medium sm:text-x1 text-center"> {text}  </p>
      <Link to={link} className="animate-bounce focus:animate-none hover:animate-none  neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semi bold">Puneet </span>👋🏽
            <br/>
            A Software Engineer from Canada
        </h1>
    ), 
    2: (
        <InfoBox 
            text="Curious about the skills I've mastered and the companies I've contributed to?"
            link="/about"
            btnText="Click here!"
        />
    ), 
    3: (
        <InfoBox 
            text="Explore the projects that showcase my technical skills and creative solution"
            link="/projects"
            btnText="Visit my Projects"
        />
    ), 
    4: (
        <InfoBox 
            text="Take a closer look at my professional journey and expertise"
            link="https://drive.google.com/file/d/1cizJZ4RY5bGRrgWTDf-Zkn177eMI_QSU/view"
            btnText="View my  Resume"
        />
    ), 
    5: (
        <InfoBox 
            text="Have questions or want to collaborate?"
            link="/contact"
            btnText="Let's Talk"
        />
    ), 
}


const HomeInfo = ( {currentStage}) => {
  return  renderContent[currentStage] || null;
  
}

export default HomeInfo