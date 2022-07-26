import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="hero_container__left">
        <h1>Build the community your fans will love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </div>
      <div className="hero_container__right">
        <img src="/images/illustration-mockups.svg" alt="mock up" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1083px;
  margin: 0 auto;
  padding: 21.19629388816645vmin 24px 50px;
  text-align: center;
  .hero_container {
    &__left {
      display: flex;
      align-items: center;
      flex-direction: column;
      & > h1 {
        font-family: var(--font-secondary);
        font-weight: 600;
        font-size: 48px;
        line-height: 100%;
        letter-spacing: 0.006em;
        text-transform: capitalize;
        color: var(--dark);
        @media (max-width: 548px) {
          font-size: 25px;
          line-height: 140%;
          text-align: center;
          letter-spacing: -0.03em;
        }
      }
      & > p {
        max-width: 591px;
        padding-top: 34px;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        text-transform: capitalize;
        color: var(--dark);
        @media (max-width: 548px) {
          padding-top: 22px;
          font-size: 16px;
          color: var(--dark);
          text-align: center;
        }
      }
      & > button {
        margin-top: 48px;
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
    }
    &__right {
      margin-top: 110px;
      width: 100%;
      @media (max-width: 548px) {
        margin-top: 60px;
        width: 100%;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
