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
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

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
      imageSrc: award,
      title: "Performance Coaching",
      description: <>One on One Career Clarity Coaching
      <br/><b>Who is it for?</b><br/>A person that requires a detailed roadmap for their career.
      <br/><b>What would you get?</b><br/>You would get clarity on what next steps to take in your career to land your dream job.


      </>
    },
    { 
      imageSrc: cv,
      title: "CV Restructure & personal branding" 
    }
 
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500"   style={{color:'#8fdff7'}}>Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card    style={{color:'#8fdff7'}}>
              <span className="imageContainer"> 
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description }
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};