import React from "react";
import styled from "styled-components";

const BenefitCard = ({ title, description, img, tWidth, width }) => {
  return (
    <BenefitCardCon maxW={width} tWidth={tWidth}>
      <div className="card_container">
        <div className="card_text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="card_img">
          <img src={`/images/${img}.svg`} alt="" />
        </div>
      </div>
    </BenefitCardCon>
  );
};
const BenefitCardCon = styled.div`
  &:nth-child(even) {
    .card_container {
      flex-direction: row-reverse;
      @media (max-width: 548px) {
        flex-direction: column-reverse;
      }
    }
  }
  &:nth-child(3n + 1) {
    background-image: url("/images/bg-section-top-desktop-1.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top left;
    background-color: var(--bg-s);
    padding: calc(170px + 8.192457737321195vmin) 24px
      calc(20px + 2.9843953185955785vmin);
    @media (max-width: 548px) {
      background-image: url("/images/bg-section-top-mobile-1.svg");
    }
  }
  &:nth-child(3n + 2) {
    background-image: url("/images/bg-section-top-desktop-2.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top left;
    padding: calc(170px + 8.192457737321195vmin) 24px
      calc(20px + 2.9843953185955785vmin);
    @media (max-width: 548px) {
      background-image: url("/images/bg-section-top-mobile-2.svg");
    }
  }
  &:nth-child(3n + 3) {
    background-image: url("/images/bg-section-top-desktop-3.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top left;
    background-color: var(--bg-s);
    padding: calc(170px + 8.192457737321195vmin) 24px
      calc(20px + 2.9843953185955785vmin);
    @media (max-width: 548px) {
      background-image: url("/images/bg-section-top-mobile-3.svg");
    }
  }
  .card {
    &_container {
      max-width: ${({ tWidth }) => (tWidth ? tWidth : "1160px")};
      margin: 0 auto;
      display: flex;
      flex-basis: 1;
      align-items: center;
      justify-content: space-between;
      gap: 56.64px;
      @media (max-width: 548px) {
        flex-direction: column-reverse;
      }
    }
    &_text {
      max-width: ${({ maxW }) => (maxW ? maxW : "512px")};
      margin-left: calc(10px + 10.274vmin);
      @media (max-width: 548px) {
        text-align: center;
        margin: 0;
      }
      & > h1 {
        font-family: var(--font-secondary);
        font-weight: 600;
        font-size: 28px;
        line-height: 120%;
        text-transform: capitalize;
        color: var(--dark);
        @media (max-width: 548px) {
          font-size: 20px;
        }
      }
      & > p {
        padding-top: 13px;
        color: var(--gray);
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        @media (max-width: 548px) {
          font-size: 14px;
        }
      }
    }
    &_img {
      @media (max-width: 548px) {
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default function Benefit() {
  const DATA = [
    {
      title: "Grow Together",
      description:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      img: "illustration-grow-together",
      tWidth: "1160px",
    },
    {
      title: "Flowing Conversations",
      description:
        "You wouldn’t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      img: "illustration-flowing-conversation",
      tWidth: "1127px",
      width: "512px",
    },
    {
      title: "Your Users",
      description:
        "It takes no time at all to integrate Huddle with your app’s authentication solution. This means, once signed in to your app. your users can start chatting immediately.",
      img: "illustration-your-users",
      tWidth: "1187px",
      width: "516px",
    },
  ];
  return (
    <Container>
      {DATA.map((data) => (
        <BenefitCard {...data} />
      ))}
    </Container>
  );
}

const Container = styled.section``;
