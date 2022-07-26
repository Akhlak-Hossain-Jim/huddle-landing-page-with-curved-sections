import React from "react";
import styled from "styled-components";

const StatusCard = ({ icon, title, description, pLeft, iWidth }) => {
  return (
    <StatusCardCon pLeft={pLeft} iWidth={iWidth}>
      <div className="status_card__icon">
        <img src={`/images/${icon}.svg`} alt={icon} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </StatusCardCon>
  );
};

const StatusCardCon = styled.div`
  .status_card__icon {
    width: ${({ iWidth }) => (iWidth ? iWidth : "47px")};
    img {
      width: 100%;
      height: auto;
    }
  }
  & > h1 {
    padding-top: 5px;
    font-weight: 700;
    font-size: 96px;
    line-height: 120%;
    color: var(--dark);
    @media (max-width: 548px) {
      font-size: 64px;
    }
  }
  & > p {
    padding-top: 20px;
    padding-left: ${({ pLeft }) => (pLeft ? pLeft : "6px")};
  }
`;

export default function Status() {
  const Data = [
    {
      icon: "icon-communities",
      title: "1.4k+",
      description: "Communities Formed",
      pLeft: "6px",
      iWidth: "47px",
    },
    {
      icon: "icon-messages",
      title: "2.7m+",
      description: "Messages sent",
      pLeft: "45px",
      iWidth: "40px",
    },
  ];
  return (
    <Container>
      {React.Children.toArray(Data.map((data) => <StatusCard {...data} />))}
    </Container>
  );
}

const Container = styled.section`
  max-width: 928px;
  margin: 0 auto;
  padding: 69px 24px 137px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  @media (max-width: 548px) {
    padding: 69px 24px 70px;
    flex-direction: column;
    align-items: center;
  }
`;
