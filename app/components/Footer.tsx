import React from "react";
import styled from "styled-components";

const Footer = () => {
  const resources = {
    twitter: "https://twitter.com/theJohnsonKow",
    github: "https://github.com/JohnsonNYC",
    linkedin: "https://www.linkedin.com/in/johnson-kow/",
    medium: "https://medium.com/@johnsonkow",
  };

  return (
    <Wrapper>
      <StyledLink target="_blank" rel="noreferrer" href={resources.twitter}>
        Twitter
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.github}>
        Github
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.linkedin}>
        LinkedIn
      </StyledLink>
      <StyledLink target="_blank" rel="noreferrer" href={resources.medium}>
        Mediums
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
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;

  box-sizing: border-box;
`;

const StyledLink = styled.a`
  color: white;
  font-size: 24px;
  text-transform: uppercase;
`;
export default Footer;