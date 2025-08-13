'use client';
import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import TattooBanner from '../components/TattooBanner';
import TattooGallery from '../components/TattooGallery';

const TattooPage = () => {
  return (
    <>
      <Header />
      <Main>
        <TattooBanner />
        <TattooGallery />
      </Main>
    </>
  );
};

export default TattooPage;

const Main = styled.main`
  min-height: 100vh;
`;
