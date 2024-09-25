import React, {Suspense} from 'react'
import styled from 'styled-components';
import Loading from '../loading';

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const AboutMe: React.FC = () => {
  return ( 
  <Suspense fallback={<Loading />}>
      <Container>
        <SplineContainer>
          <Spline scene="https://prod.spline.design/YRuiHyC64e-jvBpo/scene.splinecode" />
        </SplineContainer>
      </Container>
  </Suspense> 
  );
}

export default AboutMe;

const Container = styled.section`
  display: flex; 
  justify-content: center; 
  min-height: 100vh; 
`

const SplineContainer = styled.div`
  background-color: black;
  width: 100%; 
  display: flex;
  align-items: center; 
  justify-content: center;
`