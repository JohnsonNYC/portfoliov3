'use client'
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerRing
        animate={{ rotate: 360 }} // Rotate the ring
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          ease: "linear",   // Smooth linear rotation
          duration: 1.5,    // Speed of rotation (1.5 seconds for a full circle)
        }}
      />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
`;

const SpinnerRing = styled(motion.div)`
  width: 60px;       
  height: 60px;
  border: 6px solid rgba(0, 0, 0, 0.1); 
  border-top: 6px solid var(--sage);        
  border-radius: 50%; 
`;
