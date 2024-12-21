import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactNode } from 'react';

const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return <Main>{children}</Main>;
};

export default BackgroundContainer;

const Main = styled(motion.div)`
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

  @media screen and (max-width: 400px) {
    background-size: contain;
    background-position: center top;
  }
`;
