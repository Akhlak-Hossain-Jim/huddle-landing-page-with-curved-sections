import React from "react";
import styled from "styled-components";

export default function GetStarted() {
  return (
    <Container>
      <h1>Ready To Build your Community?</h1>
      <button>Get Started for free</button>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("/images/bg-section-top-desktop-4.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top left;
  text-align: center;
  padding: calc(150px + 20.0260078023407vmin) 24px;
  @media (max-width: 548px) {
    background-image: url("/images/bg-section-top-mobile-4.svg");
  }
  & > h1 {
    font-family: var(--font-secondary);
    font-weight: 600;
    font-weight: 600;
    font-size: 42px;
    line-height: 120%;
    letter-spacing: -0.03em;
    text-transform: capitalize;
    color: var(--dark);
    @media (max-width: 548px) {
      font-size: 28px;
    }
  }
  & > button {
    margin-top: 40px;
    width: min(400px, 100%);
    text-align: center;
    border: 0;
    outline: 0;
    background-color: var(--pink);
    border-radius: 40.5px;
    padding: 27px 30px 26px;
    color: var(--light);
    font-weight: 600;
    font-size: 20px;
    line-height: 135%;
    letter-spacing: 0.014em;
    text-transform: capitalize;
    @media (max-width: 548px) {
      font-size: 12px;
      padding: 13px 30px;
      width: min(200px, 100%);
      margin: 24px auto 0;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
