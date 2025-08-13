import React from 'react';
import styled from 'styled-components';
import ProfilePic from '@/public/images/tattoo/TattooArtist.jpg';
import Image from 'next/image';

const TattooBanner = () => {
  return (
    <Container>
      <HalfContainer>
        <div>Hi, I&apos;m Johnson</div>
        <div>
          In 2024, I started pursuing my tattooing career which is something
          I&apos;ve wanted to do since I was in high school. I attended a tattoo
          course in NobleArt Studio where I learned the fundamentals of
          tattooing.
        </div>
      </HalfContainer>
      <HalfContainer>
        <Image
          src={ProfilePic}
          alt="Johnson Portrait"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </HalfContainer>
    </Container>
  );
};

export default TattooBanner;

const HalfContainer = styled.div`
  width: 50%;
  text-align: center;

  &:first-of-type > div {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 600;
    font-size: clamp(1rem, 1vw + 1rem, 2rem);
    text-align: center;

    &:first-of-type {
      font-size: clamp(2rem, 4vw + 1rem, 3rem);
      color: var(--sage);
    }
  }
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content; 
  }
`;
