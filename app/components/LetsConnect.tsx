
import React from "react";
import styled from "styled-components";
import Marquee from "./Marquee";

const interests = [
  "UI,UX",
  "Start Ups",
  "Frontend Development",
  "Backend Development",
  "Health & Wellness",
];

interface LetsConnectProps {
  passedRef: (node?: Element | null) => void;
}

const LetsConnect: React.FC<LetsConnectProps> = ({passedRef}) => {
  return (
    <Container id='contact' ref={passedRef}>
      <Banner>
        <div>Let&apos;s</div>
        <div>Connect</div>
      </Banner>
      <InterestText>I&apos;m interested in</InterestText>
      <InterestContainer>
        {interests.map((interest, index) => {
          return (
            <LightWeightButton key={`jk-port__${index}`}>
              <Marquee text={interest} />
            </LightWeightButton>
          );
        })}
      </InterestContainer>

      <ContactButton href="mailto:jkow95@gmail.com?subject=Let's Connect!">
        Contact
      </ContactButton>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  color: white;

  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 1025px) {
    padding: 10rem;
  }
`;

const Banner = styled.div`
  & > div {
    font-size: 80px;
  }
`;

const InterestText = styled.div`
  @media screen and (min-width: 1025px) {
    font-size: 30px;
  }
`;

const InterestContainer = styled.div`
  margin-top: 20px;
`;

const LightWeightButton = styled.button`
  border: 2px solid white;
  border-radius: 20px;
  background-color: unset;
  margin: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 8px 12px;
  color: white;
`;

const ContactButton = styled.a`
  max-width: 152px;
  width: 100%;
  align-self: end;
  border: 2px solid white;
  border-radius: 20px;
  background-color: white;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  text-decoration: unset;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  padding: 8px 12px;
  color: black;
`;
export default LetsConnect;
