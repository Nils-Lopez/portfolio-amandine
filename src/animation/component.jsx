import React from "react";
import styled, { keyframes } from "styled-components";

const expand = keyframes`
  0%, 5% { width: 0% }
  95%, 100% { width: 0.1% }
`;

const moveAndColorChange = keyframes`
  0%, 5% {
    transform: translateY(calc(var(--s)/2)) rotateX(78deg);
    background-color: #E6351E; /* Updated color for filling */
  }
  95%, 100% {
    transform: translateY(calc(var(--s)/-2)) rotateX(78deg);
    background-color: #E6351E; /* Updated color for filling */
  }
`;

const maskSizeChange = keyframes`
  0%, 5% {
    -webkit-mask-size: 100% 0%;
  }
  95%, 100% {
    -webkit-mask-size: 100% 100%;
  }
`;

const Ball = styled.div`
  --s: ${(props) => props.size || "200px"};
  --c: #2c75ff; /* Updated background color */

  width: var(--s);
  aspect-ratio: 1;
  border-radius: 100%;
  display: grid;
  overflow: hidden;
  background: radial-gradient(at 36% 45%, #0000, 80%, #000);
  box-shadow: calc(var(--s) / 8) calc(var(--s) / 8) calc(var(--s) / 8)
    calc(var(--s) / -8) #0009;
  margin: auto;

  &:before,
  &:after {
    content: "";
    grid-area: 1/1;
  }

  &:before {
    background: radial-gradient(
      circle at top,
      var(--c),
      #0000
    ); /* Ensure correct opacity */
    mix-blend-mode: multiply;
    -webkit-mask: linear-gradient(#000 0 0) bottom no-repeat;
    animation: ${maskSizeChange} 7s linear infinite;
  }

  &:after {
    border-radius: 50%;
    z-index: 1;
    width: 0%;
    aspect-ratio: 1;
    margin: auto;

    background-image: linear-gradient(
      to bottom,
      #e6351e 0%,
      #e6351e 100%
    ); /* Updated color for filling */
    background-blend-mode: multiply;
    animation: ${moveAndColorChange} 4s linear infinite,
      ${expand} 4s cubic-bezier(0.06, 1334, 0.93, 1334) infinite;
  }
`;

const Container = styled.div`
  margin: 0;
  margin-top: 100px;
  max-width: 220px;

  background: linear-gradient(#0006, #0008);
  @media (max-width: 1024px) {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Ball />
      <Ball size="160px" />
      <Ball size="120px" />
    </Container>
  );
}

export default App;
