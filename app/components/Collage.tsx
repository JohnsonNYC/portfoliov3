import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Chicago from '@/public/images/more/chicago.jpg';
import Tutor from '@/public/images/more/tutor.jpg';
import Spiderman from '@/public/images/more/spiderman.jpg';

const IMAGES = [Chicago, Tutor, Spiderman];

const Collage: React.FC = () => {
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const collage = collageRef.current;
    if (collage) {
      const images = collage.querySelectorAll('img');
      images.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`;
      });
    }
  }, []);

  return (
    <CollageContainer ref={collageRef}>
      {IMAGES.map((imageSrc, index) => (
        <Image
          key={`image__${index}`}
          src={imageSrc}
          alt={`Collage image TEST`}
          layout="responsive"
          width={400}
          height={300}
        />
      ))}
    </CollageContainer>
  );
};

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  gap: 1rem;
  padding: 2rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default Collage;
