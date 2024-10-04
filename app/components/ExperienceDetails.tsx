import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { motion } from "framer-motion";

import styled from 'styled-components';


type SelectionStoreTypeProp = {
  [key: string]: {
    company: string;
    image: StaticImageData;
    colorImage?: StaticImageData;
    position: string;
    description: string;
    experience: string[];
  };
};

const ExperienceDetails: React.FC<SelectionStoreTypeProp> = ({jobDetails}) => {
  const {company, position, description, image, colorImage, experience} = jobDetails || {}; 
  return (
    <Container>
      <h1>{company} - {position.toLocaleLowerCase()}</h1>
      <h3>{description}</h3>
      <ImageContainer> 
        <Image
          fill
          src={colorImage || image}
          alt={company}
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>

      <h2>What the heck did I do?</h2>
      <ul>
        {experience.map((description, index) => {
          return (
            <ExperienceItem 
              key={index} 
              whileHover={{x:10 ,boxShadow:"0px 4px 10px rgba(0,0,0,1)", transition: {type:'spring', stiffnes:200}}}>
              <div>{description}</div>
            </ExperienceItem>
          )
        })}
      </ul>
    </Container> 
  )
}

export default ExperienceDetails;

const Container = styled.div`
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  color: white;
  font-family: 'Bebas Neueu', sans-serif;
  height: 100%; 

  display: flex; 
  flex-direction: column;

  h3 { 
    font-size: clamp(0.8rem, 1vw + 1, 1rem);
    margin-bottom: 1vh; 

    @media screen and (max-width: 400px){
      font-weight: 400;
      margin-top: 10px;
    }
  }

  h2 {
    margin-bottom: 3vh
  }

  h1 { 
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
    margin-bottom: 1vh; 
  }

  ul {
    display: flex; 
    flex-wrap: wrap;
    flex: 1 1 200px;
    max-height: 42%;
    overflow: auto;
    margin-left: 5px;
  }
`
const ExperienceItem = styled(motion.li)`
  list-style-type: none; 
  padding: 0 0.5rem; 
  margin: 0.5rem 0;
  border-radius: 10px;
  width: fit-content;
  border: 1px solid white;
  display: flex; 
  align-items: center; 
  justify-content: center; 

  @media screen and (max-width: 400px){
    border: none; 
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative; 
  width: 100%;
  height: 240px;
  margin-bottom: 2vh;
`;
