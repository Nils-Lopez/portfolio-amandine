import * as React from "react";
import styled from "styled-components";
import Headers from "../../headers";
import AnimationComponent from "../../animation/component";

const HomePage = () => {
  return (
    <PortfolioContainer>
      
      <MainContent>
        <ContentWrapper>
          <ArtworkImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/717d0123ee81268ece1d244046060b5adebb36cd495fdb54cf1a9248f66bb951?apiKey=82e3657eab4343438c9eff3719fbcc16&"
          />
          <ArtCategory>Portfolio</ArtCategory>
          <ArtTitle>Amandine’s Portfolio</ArtTitle>
          <ExhibitionTitle>Art exhibition</ExhibitionTitle>
          <DateRange>16/02-25/03/2024</DateRange>
          <Description>A small website about my art</Description>
          <Location>
            Av. Jean-François Debecker 10, 1200 Woluwe-Saint-Lambert
          </Location>
          <Schedule>
            <Day>FRIDAY</Day>
            <TimeSlot>
              <Date>16/02/2024</Date>
              <Time>17:30-18:30</Time>
            </TimeSlot>
          </Schedule>
          <EventPoster
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b575d59a344f18e81017d8e6862bcb3cb87b9f68bcee376552bb45f74f36c668?apiKey=82e3657eab4343438c9eff3719fbcc16&"
          />
        </ContentWrapper>
        <AnimationComponent />

        <ArtworkPreview
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6abaac2e989fa9613591ebd35b9af4b5173f726d1801750d03f6d490d3148?apiKey=82e3657eab4343438c9eff3719fbcc16&"
        />
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
  white-space: nowrap;
  font: 400 18px Clash Display, sans-serif;
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
  aspect-ratio: 3.33;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: center;
  margin-top: 19px;
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
