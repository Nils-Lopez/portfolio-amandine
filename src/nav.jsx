import React, { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Star from "./images/star.png"
import Hamburger from './images/hamburger.svg'
import Cross from './images/cross.svg'

function PortfolioNavigation() {
  const [active, setActive] = useState(false); 
  return (
    <>
      <PortfolioContainer>
        <PortfolioHeader>
          <Link to="/"><PortfolioImage
            loading="lazy"
            srcSet={Star}
          /></Link>
          <Link to="/"><PortfolioTitle>Amandine’s portfolio</PortfolioTitle></Link>
          {active ? (
            <ProfileImage
              loading="lazy"
              src={Cross}
              onClick={() => setActive(!active)}
            />
          ) : (
            <ProfileImage
              loading="lazy"
              src={Hamburger}
              onClick={() => setActive(!active)}
            />
          )}
        </PortfolioHeader>
        {active ? (
          <NavigationContainer onClick={() => setActive(false)}>
            <Link to="/">
              <NavigationItem>Homepage</NavigationItem>
            </Link>
            <Separator />
            <Link to="/posters">
              <NavigationItem>Posters</NavigationItem>
            </Link>
            <Separator />
            <Link to="/mockups">
              <NavigationItem>UI Mock-up</NavigationItem>
            </Link>
            <Separator />
            <Link to="/resume">
              <NavigationItem>Resume</NavigationItem>
            </Link>
          </NavigationContainer>
        ) : null}
      </PortfolioContainer>
    </>
  );
}

const PortfolioContainer = styled.div`
  border: 1px solid #000;
  background-color: #000;
  display: flex;
  width: 100%;
  padding: 0 0 20px;
  flex-direction: column;
  font-size: 20px;
  color: #eab7b5;
  position: fixed;
  z-index: 10;
  margin: 0 auto;
`;

const PortfolioHeader = styled.div`
  border-radius: 8px;
  background-color: #252525;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  color: #eab7b5;
  font-weight: 600;
  text-align: center;
  padding: 10px 22px;
`;

const PortfolioImage = styled.img`
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 59px;
`;

const PortfolioTitle = styled.div`
  font-family: "Clash Display", sans-serif;
  align-self: start;
  margin-top: 5px;
  flex-grow: 1;
  flex-basis: auto;
    color: #eab7b5;

  font-size: 35px;
  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 1.2;
  }
`;

const ProfileImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 38px;
  cursor: pointer;

  margin: auto 0;
`;

const NavigationContainer = styled.div`
  border-radius: 15px;
  background-color: #252525;
  align-self: end;
  display: flex;
  width: 100%;
  position: absolute;
  top: 65px;
  z-index: 10;

  max-width: 280px;
  flex-direction: column;
  font-weight: 400;
  white-space: nowrap;
  padding: 30px 30px;
  @media (max-width: 640px) {
    margin: 1px 0 0 0;
  }
`;

const NavigationItem = styled.div`
  font-family: "Clash Display", sans-serif;
  cursor: pointer;
  color: #eab7b5;
  margin-top: 15px;

  &:hover {
    opacity: 0.6;
  }
  &:not(:first-of-type) {
    margin-top: 17px;
  }
`;

const Separator = styled.div`
  background-color: #eab7b5;
  margin-top: 17px;
  height: 1px;
`;

const FinalSeparator = styled.div`
  background-color: #eab7b5;
  margin-top: 17px;
  height: 2px;
`;

export default PortfolioNavigation;
