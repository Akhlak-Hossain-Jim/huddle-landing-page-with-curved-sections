import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/images/logo.svg" alt="huddle logo" />
      </div>
      <button className="header_button">Try It Free</button>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(8px + 9.1028vmin) 0;
  gap: 24px;

  max-width: 1362px;
  padding-left: 41px;
  padding-right: 24px;
  margin: 0 auto;

  @media (max-width: 548px) {
    padding-left: 24px;
  }

  .header {
    &_logo {
      width: calc(100px + 19.246vmin);
      img {
        width: 100%;
        height: auto;
      }
    }
    &_button {
      padding: 12px 29.5px 13px;
      background: transparent;
      color: var(--pink);
      border-radius: 24px;
      text-align: center;
      border: 1px solid var(--pink);
      outline: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.01em;
      &:hover {
        opacity: 0.6;
      }
      @media (max-width: 548px) {
        padding: 6px 23px;
        font-size: 10px;
      }
    }
  }
`;
