import "bulma/css/bulma.min.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {useLayoutEffect} from 'react';

import Home from "./pages/home/index";
import MockUps from "./pages/mockups/index";
import Posters from "./pages/posters/index";
import PortfolioNavigation from "./nav";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Resume from "./pages/resume";
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Extralight.otf') format('opentype');
    font-weight: extralight;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Light.otf') format('opentype');
    font-weight: light;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Semibold.otf') format('opentype');
    font-weight: semibold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Clash Display';
    src: url('/assets/fonts/Clash/ClashDisplay-Medium.otf') format('opentype');
    font-weight: medium;
    font-style: normal;
  }
`;

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyle />
          <PortfolioNavigation />

          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="mockups" element={<MockUps />} />
              <Route path="posters" element={<Posters />} />
              <Route path="resume" element={<Resume />} />
            </Route>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

// Constants
const size = 350; // px
const layer = 20;

// Keyframes
const sphereAnimation = keyframes`
  0% {
    transform: scale(0) rotateZ(45deg);
  }
  
  50% {
    transform: scale(0) rotateZ(45deg);
  }
  
  100% {
    transform: scale(1) rotateZ(45deg);
  }
`;

const colorAnimation = keyframes`
  0% {
    border-color: #f55;
  }
  
  50% {
    border-color: #55f;
  }
  
  100% {
    border-color: #5f5;
  }
`;

// Styled components with CSS
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(20, 5vh);
  grid-template-columns: repeat(20, 5vw);
  transform-style: preserve-3d;
`;

const Monitor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-style: preserve-3d;
`;

// Adjusted for React, separate components for orientations might be needed for dynamic styles
const Camera = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 500ms;
`;

const Vr = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${size}px;
  height: ${size}px;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
`;

const VrLayer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(9, 15, 255, 0.006);
  border-radius: 10px;
  transform-style: preserve-3d;
  /* Dynamic transform based on props */
`;

const VrLayerItem = styled.div`
  width: 70%;
  height: 70%;
  border: 3px solid #fff;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.05);
  animation: ${sphereAnimation} 3000ms cubic-bezier(0.215, 0.61, 0.355, 1)
      alternate infinite,
    ${colorAnimation} 5000ms linear alternate infinite;
  transition: 500ms;
`;

// React component
const MyComponent = () => {
  return (
    <>
      <Container>
        {/* Trigger components would be here, but without CSS logic, we omit them */}
        <Monitor>
          <Camera className="o-x">
            <Camera className="o-y">
              <Camera className="o-z">
                <Vr>
                  {Array.from({ length: layer }, (_, i) => (
                    <VrLayer
                      key={i}
                      style={{
                        transform: `translateZ(${
                          (i * size) / layer - size / 2
                        }px)`,
                      }}>
                      <VrLayerItem />
                    </VrLayer>
                  ))}
                </Vr>
              </Camera>
            </Camera>
          </Camera>
        </Monitor>
      </Container>
    </>
  );
};

export default App;
