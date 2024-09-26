import React from "react";
import styled from "styled-components";
import { Linkedin, Twitter , Github, NotebookText} from "lucide-react";
import {useMediaPredicate} from "../utils/hooks";

const resources = {
  twitter: "https://twitter.com/theJohnsonKow",
  github: "https://github.com/JohnsonNYC",
  linkedin: "https://www.linkedin.com/in/johnson-kow/",
  medium: "https://medium.com/@johnsonkow",
};

const Footer = () => {
  const isMobile: boolean = useMediaPredicate("(max-width: 450px)");

  return (
    <Wrapper>
      <StyledLink target="_blank" rel="noreferrer" href={resources.twitter}>
        {isMobile? <Twitter /> :'Twitter'}
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.github}>
        {isMobile? <Github />: "Github"}
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.linkedin}>
        {isMobile? <Linkedin />: "LinkedIn"}
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.medium}>
        {isMobile? <NotebookText /> : "Medium"}
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 70px;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--brunswick);
  gap:10px;

  box-sizing: border-box;
`;

const StyledLink = styled.a`
  color: white;
  font-size: clamp(0.5rem, 1vw + 1rem, 1.5rem);
  text-transform: uppercase;

  svg { 
    stroke: var(--brunswick);
  }
`;
export default Footer;