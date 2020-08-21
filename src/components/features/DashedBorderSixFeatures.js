import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import award from "../../images/demo/award.svg";
import cv from "../../images/demo/cv.svg";
import users from "../../images/demo/users.svg";

import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;


const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {


  const cards = [
    {
      imageSrc: users,
      title: "Career Coaching",
      description: <><h2><i>One on One Career Clarity Coaching</i></h2>
      <b>Who is it for?</b><br/>A person that requires a detailed roadmap for their career.
      <br/><b>What would you get?</b><br/>You would get clarity on what next steps to take in your career to land your dream job.
      <br/><br/>
      <h2><i>Career Roadmap Coaching</i></h2>
      <b>Who is it for?</b><br/>Job-Seekers, Graduates & Professionals 
      <br/><b>What would you get?</b><br/>
      <ul style={{textAlign:'Left'}}>
        <li>•  Planning a successful Career Roadmap for the next 2 years or more</li>
        <li>•  Creating an attractive career relevant online brand </li>
        <li>•  Defining and achieving your career goal(s)</li>
        <li>•  Identifying hidden talents and skills in you and monetizing them</li>
        <li>•  Using technology and social media to fast track your career goal(s)</li>
      </ul>
      


      </>
    },
    { 
      imageSrc: cv,
      title: "CV Restructure & personal branding",
      description: 
      <>
        Your CV written from scratch with keywords which makes your CV standout and lands you a job.
        <br/><b>Who is it for?</b><br/>Job seekers, Professionals, Graduates, Executives, Career Changers and anyone looking to accelerate their career.
        <br/><b>What would you get?</b><br/>A standard and modern CV that makes you more attractive to recruiters.
        <br/>
        <br/><b><i>Entry Level Resume</i></b><br/>
        <ul style={{textAlign:'Left'}}>
          <li><b>Select this option if you have 0-2 years in the workforce.</b></li>
          <li>•	 Phone consultation with one of our professional resume experts.</li>
          <li>•  Proven resume format that gets employers’ attention.</li>
          <li>•	 Personalized draft of your resume turned around within two business days of your consultation.</li>
          <li>•  We will make two rounds of comprehensive revisions based on your feedback.</li>
          <li>•  Your final, personalized resume will be emailed to you in Word and PDF formats.</li>
        </ul>
        <br/><b><i>Entry Level Resume</i></b><br/>
        <ul style={{textAlign:'Left'}}>
          <li><b>Select this option if you have 0-2 years in the workforce.</b></li>
          <li>•	 Phone consultation with one of our professional resume experts.</li>
          <li>•  Proven resume format that gets employers’ attention.</li>
          <li>•	 Personalized draft of your resume turned around within two business days of your consultation.</li>
          <li>•  We will make two rounds of comprehensive revisions based on your feedback.</li>
          <li>•  Your final, personalized resume will be emailed to you in Word and PDF formats.</li>
        </ul>
      </>
    },
    {
      imageSrc: award,
      title: "Interview Preparation",
      description: 
      <>
        Our interview preparation includes a 30-minute consultation with an interview expert. Have questions about how to prepare for the most common interview question, how to answer some of the most difficult interview questions, or even on what to wearur career to land your dream job.
      </>
    }
 
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500"   style={{color:'#8fdff7'}}>Services</span></Heading>
          {cards.map((card, i) => (

              <Card  style={{color:'#8fdff7'}}>
                <span className="imageContainer"> 
                  <img src={card.imageSrc} alt="" />
                </span>
                <span className="textContainer">
                  <span className="title">{card.title}</span>
                  <p className="description">
                    {card.description }
                  </p>
                </span>
              </Card>

            ))}
       
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
