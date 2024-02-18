import * as React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Sym from "./images/sym.svg"
function PortfolioShowcase({page = false}) {
  return (
    <>
      {!page || page === "mockup" ? <Link to="/mockups"><PortfolioItem>
        <PortfolioContent>
          <ImageContainer>
            <Image loading="lazy" src={Sym} />
                        <Image loading="lazy" src={Sym} />
            <Image loading="lazy" src={Sym} />

          </ImageContainer>
          {!page ? <PortfolioText>
            Amandine’s <br /> portfolio
          </PortfolioText> : null}
        </PortfolioContent>
        <Title>UI Mock-Up</Title>
      </PortfolioItem></Link> : null}
      {!page || page === "posters" ? <Link to="/posters"><PortfolioItem bg="#cc4600">
        <PortfolioContent>
          <ImageContainer>
            <Image loading="lazy" src={Sym} />
                        <Image loading="lazy" src={Sym} />
            <Image loading="lazy" src={Sym} />

          </ImageContainer>
          {!page ? <PortfolioText color="#cc4600">
            Amandine’s <br /> portfolio
          </PortfolioText> : null}
        </PortfolioContent>
        <Title color="#252525">Posters</Title>
      </PortfolioItem></Link> : null}
      {!page || page === "resume" ? <Link to="/resume"><PortfolioItem bg="#2C75FF">
        <PortfolioContent>
          <ImageContainer>
            <Image loading="lazy" src={Sym} />
                        <Image loading="lazy" src={Sym} />
            <Image loading="lazy" src={Sym} />

          </ImageContainer>
          {!page ? <PortfolioText color="white">
            Amandine’s <br /> portfolio
          </PortfolioText> : null}
        </PortfolioContent>
        <Title color="white">Resume</Title>
      </PortfolioItem></Link> : null}
    </>
  );
}



const PortfolioItem = styled.div`
  background-color: ${props => props.bg || "#eab7b5"};
  display: flex;
  margin-top: 25px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  transition: opacity 0.5s ease-in-out  ;
  &:hover {
    opacity: 0.8  ;
  }
`;

const PortfolioContent = styled.div`
  display: flex;
  gap: 0;
  align-self: start;
`;

const ImageContainer = styled.div`
  background-color: #d9d9d9;
  display: flex;
  aspect-ratio: 1.33;
  padding: 0 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    padding-bottom: 9px;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.37;
  object-fit: cover;
  object-position: center;
  height: 70px;
  stroke-width: 1px;
  stroke: #c6c2c1;
`;

const PortfolioText = styled.div`
  background-color: #252525;
  flex-grow: 1;
  color: ${props => props.color || "#eab7b5"};
  text-align: center;
  padding: 10px;
  padding-top: 12px;
  margin-left: auto;
  font: 200 18px Clash Display, sans-serif;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Title = styled.div`
  color: ${props => props.color || "#cc4600"};
  flex-grow: 1;
  margin: auto 0;
  margin-left: -180px;
  font: 500 30px Clash Display, sans-serif;
  text-align: center;
  @media (max-width: 640px) {
    margin-left: 1px;
  }
`;

export default PortfolioShowcase;