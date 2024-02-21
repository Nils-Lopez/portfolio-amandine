import * as React from "react";
import styled from "styled-components";
import Headers from "../../headers";
import AnimationComponent from "../../animation/component";
import RedBg from "../../images/red rectangle.svg";
import Barcode from "../../images/bar code.svg";
import Mouth from "../../images/mouth.png";

const HomePage = () => {
  return (
    <PortfolioContainer>
      <MainContent>
        <ContentWrapper>
          <ArtworkImage loading="lazy" src={RedBg} />
          <ArtCategory>Portfolio</ArtCategory>
          <ArtTitle>Amandine’s Portfolio</ArtTitle>

          <Description>
            As an graphic design student, I've curated a digital showcase of my
            passion for blending art with technology, inviting you to explore my
            creative world in two clicks.
          </Description>

          <EventPoster loading="lazy" src={Barcode} />
        </ContentWrapper>
        <AnimationComponent />

        <ArtworkPreview loading="lazy" srcSet={Mouth} />
      </MainContent>
      <GallerySection>
        <Headers />
      </GallerySection>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  border: 1px solid #000;
  background-color: #000;
  display: flex;
  width: 100%;

  gap: 20px;
  padding-top: 120px;
  height: 100% !important;
  min-height: 100vh;
  padding-bottom: 23px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding-bottom: 147px;
    margin-bottom: -2px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 40px;
  width: 100%;
  color: #252525;
  line-height: 120.6%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e6351e;
  overflow: hidden;
  position: relative;
  width: 90%;
  border-radius: 30px;
  max-width: 350px;
  aspect-ratio: 0.48;
  padding: 9px 14px 17px;
  box-sizing: border-box;
  bottom: 40px !important;

  @media (min-width: 640px) {
    min-width: 350px !important;
    flex: 1;
    bottom: 0 !important;
  }
`;

const ArtworkPreview = styled.img`
  object-fit: cover;
  object-position: center;
  width: 90%;

  max-width: 350px;
  @media (min-width: 640px) {
    flex: 1;
  }
`;

const ArtworkImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ArtCategory = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  color: #e6351e;
  white-space: nowrap;
  font: 500 48px "Clash Display", sans-serif;
`;

const ArtTitle = styled.div`
  position: relative;
  background-color: #252525;
  margin-top: 13px;
  justify-content: center;
  color: #d9d9d9;
  white-space: nowrap;
  padding: 5px 4px;
  width: auto;
  display: inline-block;

  font: 400 18px "Clash Display", sans-serif;
`;

const ExhibitionTitle = styled.div`
  position: relative;
  margin-top: 6px;
  font: 400 18px Clash Display, sans-serif;
`;

const DateRange = styled.div`
  position: relative;
  background-color: #252525;
  margin-top: 5px;
  justify-content: center;
  color: #fff;
  white-space: nowrap;
  padding: 5px 2px;
  font: 400 18px Clash Display, sans-serif;
`;

const Description = styled.div`
  position: relative;
  margin-top: 11px;
  padding-left: 10px;
  white-space: normal;
  font: 100 25px Clash Display, sans-serif;
`;

const Location = styled.div`
  position: relative;
  margin-top: 11px;
  font: 400 15px Clash Display, sans-serif;
`;

const Schedule = styled.div`
  position: relative;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
  text-align: center;
  padding: 0 2px;
`;

const Day = styled.div`
  font: 400 15px Clash Display, sans-serif;
`;

const TimeSlot = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font: 400 15px Clash Display, sans-serif;
`;

const Time = styled.div`
  font: 300 15px Clash Display, sans-serif;
`;

const EventPoster = styled.img`
  position: absolute;
  bottom: 19px;
  width: 60%;
  margin-left: 15%;
`;

const GallerySection = styled.div`
  margin-top: 40px;
  width: 75%;
`;

const ArtPiece = styled.div`
  background-color: #cc4600;
  display: flex;
  padding-bottom: 50px;
  flex-direction: column;
`;

const ArtPieceImageContainer = styled.div`
  background-color: #d9d9d9;
  z-index: 10;
  display: flex;
  aspect-ratio: 0.77;
  padding-top: 41px;
  flex-direction: column;
  align-items: center;
`;

const GalleryImage = styled.img`
  aspect-ratio: 2.7;
  object-fit: auto;
  object-position: center;
  width: 43px;
  stroke-width: 1px;
  stroke: #c6c2c1;
`;

const ArtPieceBackground = styled.div`
  background-color: #252525;
  height: 82px;
`;

export default HomePage;
