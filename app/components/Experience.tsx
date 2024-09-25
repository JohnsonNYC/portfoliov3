import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from "framer-motion";

import SombleBW from "@/public/images/SwingAndShootBW.jpg";
import SpecPic from "@/public/images/spec-frame.png";
import InfosysBW from "@/public/images/InfosysBW.jpg";

const Experience = () => {
  return ( 
    <Container id='experience'>
      <Title>Experience</Title>
        <ImageWrapper>
          <TextContainer>
            <h1>&quot;SOMBLE&quot;</h1>
            <h3>SOFTWARE ENGINEER, FRONTEND DEVELOPER</h3>
          </TextContainer>

          <Card whileHover={{ scale: 0.95 }} transition={{ type: 'tween', stiffness: 200 }}>
            <ImageContainer  whileHover={{ scale: 1.3 }} transition={{ type: 'tween', duration: 0.3 }}> 
              <Image
                src={SombleBW}
                alt="Somble"
                layout='fill'
                objectFit='cover'
                // onClick={() => openModal("Somble")}
              />
            </ImageContainer>
          </Card>
        </ImageWrapper>

        <ImageWrapper>
          <TextContainer>
            <h1>&quot;SPEC&quot;</h1>
            <h3>RESEARCH ASSOCIATE SOFTWARE ENGINEER</h3>
          </TextContainer>
          <Card whileHover={{ scale: 0.95 }} transition={{ type: 'tween', stiffness: 200 }}>
            <ImageContainer whileHover={{ scale: 1.3 }} transition={{ type: 'tween', duration: 0.3 }}>
              <Image
                src={SpecPic}
                alt="SPEC"
                layout='fill'
                objectFit='cover'
                // onClick={() => openModal("Somble")}
              />
            </ImageContainer>
          </Card>
        </ImageWrapper>

        <ImageWrapper>
          <TextContainer>
            <h1>&quot;Infosys&quot;</h1>
            <h3>TECHNICAL ASSOCIATE | QA ENGINEER</h3>
          </TextContainer>

          <Card whileHover={{ scale: 0.95 }} transition={{ type: 'tween', stiffness: 200 }}>
            <ImageContainer whileHover={{ scale: 1.3 }} transition={{ type: 'tween', duration: 0.3 }}>
              <Image
                src={InfosysBW}
                alt="Infosys"
                layout='fill'
                objectFit='cover'
                // onClick={() => openModal("Somble")}
              />
            </ImageContainer>
          </Card>
      </ImageWrapper>
    </Container>
  );
}

export default Experience;

const Container = styled.div`
  height: 100vh; 
`

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif; 
`

const Card = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  max-height: 240px;
  height: 240px;
  overflow: hidden;
  background-color: #f5f5f5;
  flex: 4 1 400px; 
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem; 
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 400px; 

  & > h1 { 
    font-family: 'Bebas Neue', sans-serif; 
    font-size: 4rem;
  }

  & > h3 { 
    font-family: 'Bebas Neue', sans-serif; 
    font-size: 1rem;
  }
`

const ImageContainer = styled(motion.div)`
  position: relative; 
  width: 100%;
  height: 240px;
`;