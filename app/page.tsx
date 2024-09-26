// import Image from "next/image";
'use client'
import React, { useState, useEffect} from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { useIntersectionObserver } from "./utils/hooks";
import styled from "styled-components";

import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import LetsConnect from "./components/LetsConnect";
import Projects from "./components/Projects";

export default function Home() {
  const [loadAboutMe, setLoadAboutMe] = useState<boolean>(false);
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.8 });
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({ threshold: 0.1 });
  const { ref: letsConnectRef, inView: letsConnectInView } = useInView({ threshold: 0.8 });

  const controls = useAnimation();

  useEffect(() => {
    if(introInView || letsConnectInView){
      controls.start({opacity: 0.5, transition: {duration: 1, ease: 'easeInOut'}})
    }else { 
      controls.start({opacity: 1, transition: {duration: 1, ease: 'easeInOut'}})

    }
  }, [introInView, letsConnectInView, controls]);

  useEffect(() => {
    if(aboutMeInView)setLoadAboutMe(true);
  },[aboutMeInView])

  return (
    <>
      <Header />
        <BackgroundContainer>
          <BackgroundOverlay animate={controls} initial={{ opacity: 0.5 }}/>
            <MainContainer >
              <Intro passedRef={introRef}/>
              <div id='about' ref={aboutMeRef} style={{ minHeight:'100vh'}}>
                {loadAboutMe && <AboutMe/>}
              </div>
              <Experience />
              <Projects />
              <LetsConnect passedRef={letsConnectRef}/>
            </MainContainer>
        </BackgroundContainer>
      <Footer />
    </>
  );
}


const MainContainer = styled(motion.main)`
  padding: 0 1rem; 
`

const BackgroundContainer = styled(motion.div)`
  position: relative; 
  min-height: 100vh;
  background-image: url('/images/main-background-resized.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  & > * {
    position: relative; 
    z-index: 1;
  }
`;

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1); /* You can use this for an additional overlay effect */
  z-index: 0;
`;