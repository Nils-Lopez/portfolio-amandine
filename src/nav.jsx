import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function PortfolioNavigation() {
  const [active, setActive] = useState(false);

 
  return (
    <>
      <PortfolioContainer>
        <PortfolioHeader>
          <Link to="/"><PortfolioImage
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/724e35803cc6daa70c0fd942fd7d6b32abcb0b7f89149b656c5000e0cb842db0?apiKey=82e3657eab4343438c9eff3719fbcc16&"
          /></Link>
          <Link to="/"><PortfolioTitle>Amandine’s portfolio</PortfolioTitle></Link>
          {active ? (
            <ProfileImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4842ea78072d00c5972c9e2fc338e2a095a5cda416d776b7b4545d1cba6263fe?apiKey=82e3657eab4343438c9eff3719fbcc16&"
              onClick={() => setActive(!active)}
            />
          ) : (
            <ProfileImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4694651af64b6a70401728d46713640378a026cd9081cd03c05f99ddbeefdd3f?apiKey=82e3657eab4343438c9eff3719fbcc16&"
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
