import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import MarqueeButton from './MarqueeButton';
import { scrollToComponent } from '../utils/service';

interface IntroProps {
  passedRef: (node?: Element | null) => void;
}

const Intro: React.FC<IntroProps> = ({passedRef}) => {
return(
  <Container ref={passedRef}>
    <LeftContainer
      style={{ transformOrigin: "bottom left " }}
      initial={{ rotateZ: -90, x: "-100vw" }}
      animate={{ rotateZ: 0, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        stiffness: 80,
        type: "spring",
      }}
      >
        <div>Creative</div>
        <div>Artist</div>
        <div>Developer</div>
    </LeftContainer>
    
    <RightContainer
      className="port__banner--summary"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      >
      I AM A CREATIVE FRONTEND DEVELOPER BASED IN NEW YORK CITY. WITH 3
      YEARS OF EXPERIENCE IN THE TECH INDUSTRY, I&rsquo;VE WORKED AS A QA
      ENGINEER, FRONTEND DEVELOPER AND DEDICATED MY PASSION TO CRAFTING
      INTUITIVE AND BEAUTIFUL USER INTERFACES. BEYOND CODE, I FIND
      INSPIRATION IN NATURE, EMBRACE FITNESS, LOVE TO TRAVEL, ENJOY A GOOD
      PIZZA, AND THRIVE IN THE WORLD OF VISUAL DESIGN.
      <MarqueeButton
        handleClick={() => scrollToComponent("contact")}
        text="Contact Me"
        customClassName="intro-contact-btn"
        />
    </RightContainer>
  </Container>
)
}

export default Intro;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  flex-wrap: wrap; 
`
  
const LeftContainer = styled(motion.div)`
  flex: 1 1 500px;
  
  & > div { 
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 600; 
    font-size: clamp(1rem, 12vw + 1rem, 5rem);
    text-align: center; 

    &:first-of-type {
      color: var(--sage);
      font-size: clamp(0.5rem, 3vw + 1rem, 3rem)
    }
      
    &:nth-of-type(2)::after { 
      content: " &";
      font-size: clamp(0.5rem , 3vw + 1rem, 3rem );
      color: var(--sage);
    }
  }
`
const RightContainer = styled(motion.div)`
  flex: 1 1 500px; 
  display: flex; 
  flex-direction: column; 

  font-family: 'Bebas Neue', sans-serif;
  padding: 0 0.5rem;

  font-size: clamp(0.5rem, 1vw + 1rem, 1.5rem);
  font-weight: 600;

  & > button {
    margin-top: 20px;
  }
`