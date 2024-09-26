import React, {useState, useEffect} from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import ExperienceDetails from './ExperienceDetails';

import { motion } from "framer-motion";

import SombleBW from "@/public/images/SwingAndShootBW.jpg";
import SombleColor from "@/public/images/SwingAndShootColor.jpeg";
import SpecPic from "@/public/images/spec-frame.png";
import InfosysBW from "@/public/images/InfosysBW.jpg";
import Modal from './Modal';

type SelectionStoreType = {
  [key: string]: {
    company: string;
    image: StaticImageData;
    colorImage?: StaticImageData;
    position: string;
    description: string;
    experience: string[];
  };
};

const SelectionStore: SelectionStoreType = {
  "Somble": {
    company: "Somble",
    image: SombleBW,
    colorImage: SombleColor,
    position: "SOFTWARE ENGINEER, FRONTEND DEVELOPER",
    description: "An online platform for fitness instructors to host on-demand videos, programs, live sessions, and events",
    experience: [
      "Developed analytics dashboard using Recharts for coaches to monitor revenue and views.",
      "Created interactive user threads, fostering engagement and communication.",
      "Led two profile redesigns, showcasing design skills and improving user experience.",
      "Engineered a responsive calendar for students to manage daily courses.",
      "Provided timely responses to customer support tickets, ensuring positive user experiences.",
    ]
  },
  "SPEC": { 
    company: "SPEC",
    image: SpecPic,
    position: "RESEARCH ASSOCIATE SOFTWARE ENGINEER",
    description: "An open learning platform that empowers individuals to learn through training, mentorship, and internships.",
    experience: [ 
      "Drove impactful changes to the company's main website, utilizing Gatsby for consistent updates and maintenance.",
      "Demonstrated web development expertise by implementing strategic enhancements and modernizing the website's infrastructure."
    ]
  }, 
  "Infosys": {
    company: "Infosys",
    image: InfosysBW,
    position: "TECHNICAL ASSOCIATE | QA ENGINEER",
    description:  "A technology consulting company that uses automated testing with Selenium and Java for cleaner code and a more efficient codebase",
    experience: [  
      "Contracted with Southern Edison, utilizing Selenium and Java to create automated tests for enhanced efficiency and reliability.",
      "Maintained a focus on delivering automated solutions, improving testing processes and reducing manual efforts."
    ]
  }
}
const Experience = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<SelectionStoreType[keyof SelectionStoreType] | null>(null);
  
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if(selectedExperience)openModal();
    else closeModal();
  }, [selectedExperience])

  return ( 
    <Container id='experience'>
      
      <Title>Experience</Title>

      {Object.keys(SelectionStore).map((key, index) => {
        return (
          <ImageWrapper key={index}>
            <TextContainer>
              <h1>&quot;{key}&quot;</h1>
              <h3>{SelectionStore[key].position}</h3>
            </TextContainer>

            <Card whileHover={{ scale: 0.95 }} transition={{ type: 'tween', stiffness: 200 }} onClick={() => setSelectedExperience(SelectionStore[key])}>
              <ImageContainer  whileHover={{ scale: 1.3 }} transition={{ type: 'tween', duration: 0.3 }}> 
                <Image
                  fill
                  src={SelectionStore[key].image}
                  alt={key}
                  style={{ objectFit: 'cover' }}
                />
              </ImageContainer>
            </Card>
          </ImageWrapper>
        )
      })}

      <Modal isOpen={isModalOpen} onClose={() => setSelectedExperience(null)} wrapperId="modal-root">
        {selectedExperience && (
          <ExperienceDetails jobDetails={selectedExperience}/>
          )
        }
      </Modal>
    </Container>
  );
}

export default Experience;



const Container = styled.div`
  min-height: 100vh; 
  padding-top: 5vh;
`

const Title = styled.h1`
  font-size: clamp(1rem, 3vw + 1rem, 2rem);
  font-family: 'Bebas Neue', sans-serif; 
  color: var(--brunswick);
  text-align: center;
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
  gap: 10px;
  cursor: pointer; 
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 400px; 

  & > h1 { 
    font-family: 'Bebas Neue', sans-serif; 
    font-size: clamp(1rem, 5vw + 1rem, 4rem)
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