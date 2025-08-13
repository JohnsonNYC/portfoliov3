import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const tattoos = [
  { id: 1, src: '/images/tattoo1.jpg', alt: 'Tattoo 1' },
  { id: 2, src: '/images/tattoo2.jpg', alt: 'Tattoo 2' },
  { id: 3, src: '/images/tattoo3.jpg', alt: 'Tattoo 3' },
  { id: 4, src: '/images/tattoo4.jpg', alt: 'Tattoo 4' },
  { id: 5, src: '/images/tattoo1.jpg', alt: 'Tattoo 1' },
  { id: 6, src: '/images/tattoo2.jpg', alt: 'Tattoo 2' },
  { id: 7, src: '/images/tattoo3.jpg', alt: 'Tattoo 3' },
  { id: 8, src: '/images/tattoo4.jpg', alt: 'Tattoo 4' },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridItem = styled.div`
  position: relative;
  border: 1px solid red;
`;

const TattooGallery: React.FC = () => {
  return (
    <Grid>
      {tattoos.map((tattoo) => (
        <GridItem key={tattoo.id}>
          hi
          {/* <img
            src={tattoo.src}
            alt={tattoo.alt}
            className="w-full h-auto rounded-lg shadow-md"
          /> */}
        </GridItem>
      ))}
    </Grid>
  );
};

export default TattooGallery;
