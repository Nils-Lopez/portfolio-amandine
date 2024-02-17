import * as React from "react";
import styled from "styled-components";

import Home from "../../images/mockuphomepage.png";
import Audio from "../../images/mockupaudio.png";
import Podcast from "../../images/mockuppodcast.png";

import BadgeSVG from "../../badge";

function PortfolioGallery() {
  return (
    <Div>
      <Gallery>
        <GalleryItem />
      </Gallery>
      <ItemContainer>
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#252525" />
        <ItemTitle>HomePage</ItemTitle>
        <Poster src={Home} />
      </ItemContainer>
      
      <ItemContainer>
        <BadgeSVG />
        <ItemTitle>Podcast Index</ItemTitle>
        <Poster src={Audio} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#FF5A01" />
        <ItemTitle>Podcast Player</ItemTitle>
        <Poster src={Podcast} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#CC4600" />
        <PosterText>
          I was in charge of designing mock-ups of an educative mobile app for a Software Company specialised in AI for education. <br /> <br />
          It was my first UI professional project, here are some of the mock-ups I produced for this project.
        </PosterText>
      </ItemContainer>
    </Div>
  );
}

const ItemContainer = styled.div`
  max-width: 350px;
  width: 90%;
  transition: width 0.5s ease-in-out, max-width 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    max-width: 420px;
    width: 95%;
  }
`;

const Poster = styled.img`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
`;

const PosterText = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  padding: 30px;
  text-align: center;
  background: #252525;
  color: white;
  font-family: "Clash Display", sans-serif;
  font-size: 18px;
`;

const ItemTitle = styled.p`
  color: white;
  font-family: "Clash Display", sans-serif;
  font-size: 25px;
  margin: auto;
  text-align: center;
  margin-top: -45px;
`;

const Div = styled.div`
  border: 1px solid #000;
  background-color: #000;
  display: flex;
  width: 100%;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;


const Gallery = styled.div`
  background-color: rgba(31, 30, 30, 1);
  display: flex;
  aspect-ratio: 1.14;
  flex-direction: column;
  justify-content: center;
`;

const GalleryItem = styled.div`
  background-color: rgba(31, 30, 30, 1);
  height: 57px;
`;

export default PortfolioGallery;
