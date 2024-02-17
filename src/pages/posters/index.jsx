import * as React from "react";
import styled from "styled-components";

import Antagonisme from "../../images/antagonisme.png";
import Dissension from "../../images/dissension.png";
import Dissonance from "../../images/dissonance.png";
import Eclat from "../../images/éclat.png";
import Froid from "../../images/froid.png";
import Melee from "../../images/melee.png";
import Pixel from "../../images/pixel.png";

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
        <ItemTitle>Pixel</ItemTitle>
        <Poster src={Pixel} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#CC4600" />
        <PosterText>
          This poster is a reflection of my project, where I was tasked with
          creating a pixel art composition within a grid. The grid served as a
          framework for expressing one of my personality traits—extremes.
          Through contrasting black and white squares, symbolizing the dichotomy
          of everything or nothing in my mind, alongside varying sizes of
          checkerboard patterns, I aimed to convey this aspect of myself. <br />
          <br />
          While my name was required to be included, I integrated it subtly.
          Each letter of my name has its own place on the poster, scattered
          throughout the composition, reflecting the diversity of the self
          within the overarching theme.
        </PosterText>
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG />
        <ItemTitle>Antagonisme</ItemTitle>
        <Poster src={Antagonisme} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#FF5A01" />
        <ItemTitle>Dissension</ItemTitle>
        <Poster src={Dissension} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#3FC1FA" />
        <ItemTitle>Dissonance</ItemTitle>
        <Poster src={Dissonance} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#990500" />
        <ItemTitle>Éclat</ItemTitle>
        <Poster src={Eclat} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#3F5E7A" />
        <ItemTitle>Froid</ItemTitle>
        <Poster src={Froid} />
      </ItemContainer>
      <ItemContainer>
        <BadgeSVG color="#CC4600" />
        <ItemTitle>Mêlée</ItemTitle>
        <Poster src={Melee} />
      </ItemContainer>

      <ItemContainer>
        <BadgeSVG color="#CC4600" />
        <PosterText>
          For a project I was asked to use the pouring technique in painting,
          followed by creating montages to develop a series of posters. <br /><br />
          Additionally, I had to devise a theme for this series and assign a
          corresponding name to each poster. In this project, I chose the theme
          of conflict, and I opted for conceptual names for the posters to
          create abstract yet comprehensible visuals.
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
