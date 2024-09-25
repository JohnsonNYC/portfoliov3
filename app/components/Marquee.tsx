import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface MarqueeProps {
  text: string;
}

const Marquee = ({ text }: MarqueeProps) => {
  const marqueeText = `${text} ${text} ${text} ${text} ${text} ${text}`;
  const maxWidthNode = useRef<HTMLSpanElement>(null);
  const [maxWidth, setMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!maxWidthNode.current || !maxWidthNode.current.offsetWidth) return;

    setMaxWidth(maxWidthNode.current.offsetWidth);
  }, [maxWidthNode]);

  useEffect(() => {
    const startAnimation = () => {
      const spanElement = document.querySelector(".marquee span");
      if (spanElement) {
        (spanElement as HTMLElement).style.animationPlayState = "running";
      }
    };

    const stopAnimation = () => {
      const spanElement = document.querySelector(".marquee span");
      if (spanElement) {
        (spanElement as HTMLElement).style.animationPlayState = "paused";
      }
    };

    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <Container $maxWidth={maxWidth || 100}> {/* Use $maxWidth */}
      <div className="marquee">
        <span>{marqueeText}</span>
        <span ref={maxWidthNode}>{text}</span>
      </div>
    </Container>
  );
};

interface ContainerProps {
  $maxWidth: number; // Change this to $maxWidth
}

const Container = styled.div<ContainerProps>`
  max-width: ${(props) => `${props.$maxWidth}px`}; // Use $maxWidth in the styling
  white-space: nowrap;
  overflow: hidden;

  .marquee {
    width: 300px;
    height: 30px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      animation: marqueeEffect 5s infinite linear;
    }
  }

  @keyframes marqueeEffect {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default Marquee;
