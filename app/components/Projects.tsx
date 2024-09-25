import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import AIShirt from "@/public/images/projects/AItshirtThumbnail.png"
import Abelton from "@/public/images/projects/AbeltonThumbnail.png"
import GamePhysics from "@/public/images/projects/GamePhysicsThumbnail.png";
import PortfolioV1 from "@/public/images/projects/PortfolioV1Thumbnail.png";
import Linda from "@/public/images/projects/LindaThumbnail.png";

import { Github } from "lucide-react";

// Links

type Project = {
  key: number;
  link: string;
  github: string;
  img: StaticImageData;
};

const projects: { [key: string]: Project } = {
  "AI TSHIRT": {
    key: 1,
    link: "https://johnson-tech-ai-tshirt.netlify.app/",
    github: "https://github.com/JohnsonNYC/AIShirt",
    img: AIShirt,
  },
  ABELTON: {
    key: 2,
    link: "https://abelton-practice.netlify.app/",
    github: "https://github.com/JohnsonNYC/abelton-page",
    img: Abelton,
  },
  LINDA: {
    key: 3,
    link: "https://linda-spline.netlify.app/",
    github: "https://github.com/JohnsonNYC/spline-demo",
    img: Linda,
  },
  "GAME PHYSICS": {
    key: 4,
    link: "https://small-game-physics.netlify.app/",
    github: "https://github.com/JohnsonNYC/spline-physics-demo",
    img: GamePhysics,
  },
  "PORTFOLIO V1": {
    key: 5,
    link: "https://thejohnsonkow.netlify.app/",
    github: "https://github.com/JohnsonNYC/portfolio",
    img: PortfolioV1,
  },
};

const Projects = () => {
  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Container >
      <Title>Projects</Title>
        {Object.keys(projects).map((title: string) => {
          return (
            <ImageWrapper key={projects[title].key} >
              <TextContainer>
                <Github
                  onClick={() => handleProjectClick(projects[title].github)}
                />
                <h1>&quot;{title}&quot;</h1>
              </TextContainer>
              <Card whileHover={{ scale: 0.95 }} transition={{ type: 'tween', stiffness: 200 }}>
                <ImageContainer
                  onClick={() => handleProjectClick(projects[title].link)}
                  whileHover={{ scale: 1.3 }} // Zoom the image in on hover
                  transition={{ type: 'tween', duration: 0.3 }}
                  >
                  <Image src={projects[title].img} alt={title} layout='fill' objectFit='cover'/>
                </ImageContainer>
              </Card>
            </ImageWrapper>
          );
        })}
    </Container>
  );
};


export default Projects;

const Container = styled.div`
  min-height: 100vh; 
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
  align-items: center;
  gap:10px;
  flex: 0 1 400px; 

  & > h1 { 
    font-family: 'Bebas Neue', sans-serif; 
    font-size: 3rem;
  }

  & > svg { 
    stroke: var(--sage);
  }
`

const ImageContainer = styled(motion.div)`
  position: relative; 
  width: 100%;
  height: 240px;
`;