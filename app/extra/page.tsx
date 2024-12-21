'use client';
import React from 'react';
import Header from '../components/Header';
import Collage from '../components/Collage';

import styled from 'styled-components';

const MorePage: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Banner>
          <LeftContainer>
            <div>Photography</div>
            <div>&</div>
            <div>Tattoos</div>
          </LeftContainer>
          <RightContainer>
            <div>
              Sometime around college, I asked my brother for a camera and a
              drone. This honestly took away from my interest in engineering for
              a while and all I wanted to do was go out and take cool photos
            </div>
            <div>
              In 2024, I attended a tattooing academy where I learned from some
              of the best in the industry. As someone that loves art, in all
              forms, I like to learn as much as I can from as many different
              mediums.
            </div>
          </RightContainer>
        </Banner>

        <Collage />
      </Main>
    </>
  );
};

export default MorePage;

const Main = styled.main`
  height: 100vh;
`;

const Banner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContainer = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 600;
  font-size: clamp(1rem, 12vw + 1rem, 5rem);
  text-align: center;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
  flex: 1 1 0;
`;

const RightContainer = styled.div`
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  flex: 1 3 0;

  & > div {
    padding: 1rem 0;
  }
`;
