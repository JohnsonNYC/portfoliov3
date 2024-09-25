import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaPredicate } from "../utils/hooks";

interface MarqueeButtonProps { 
  text: string, 
  handleClick: () => void, 
  customClassName: string
}

const MarqueeButton = ({ text, handleClick, customClassName = "" }: MarqueeButtonProps) => {
  const textCap = text.toUpperCase();
  const isMobile = useMediaPredicate("(max-width: 1025px)");

  return (
    <StyledButton onClick={handleClick} className={customClassName}>
      <span>{textCap}</span>
      {isMobile ? null : (
        <div className="marquee">
          <div className="marquee--inner">
            <span>{textCap}</span>
            <span>{textCap}</span>
            <span>{textCap}</span>
            <span>{textCap}</span>
            <span>{textCap}</span>
          </div>
        </div>
      )}
    </StyledButton>
  );
};

export default MarqueeButton;

const marquee = keyframes`
  0% {
    transform: translate3d(calc(-25% + 1rem), 0, 0);
  }
  100% {
transform: translate3d(calc(-50% + 1rem), 0, 0);
  }
`;
const StyledButton = styled.button`
  height: 36px;
  max-width: 174px;
  width: 100%;
  cursor: pointer;

  border: 2px solid white;
  border-radius: 20px;
  background-color: unset;
  position: relative;

  font-size: 20px;
  color: white;

  .marquee {
    position: absolute;
    top: 5px;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;

    .marquee--inner {
      animation: ${marquee} 3s linear infinite;
      width: fit-content;
      display: flex;
      align-item: center;
      gap: 4px;
      transform: translate3d(calc(-25% + 1rem), 0, 0);
      opacity: 0;

      & > span {
        text-wrap: nowrap;
        width: fit-content;
      }
    }
  }

  @media screen and (min-width: 1025px) {
    max-width: 250px;
    width: 100%;
    height: 50px;
    font-size: 2.125rem;

    &: hover {
      & > span {
        opacity: 0;
      }

      .marquee--inner {
        opacity: 1;
      }
    }
  }
`;
