import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <div className="footer">
        <div className="footer_left">
          <div className="footer_left__logo">
            <img src="/images/logo-white.svg" alt="huddle logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Mauris
            nulla quam, hendrerlt lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="footer_left__option">
            <FiPhoneCall />
            <a href="tel:+1-543-123-4567" className="footer_left__option__link">
              Phone: +1-543-123-4567
            </a>
          </div>
          <div className="footer_left__option">
            <HiMail />
            <a
              href="mailto:example@huddle.com"
              className="footer_left__option__link"
            >
              example@huddle.com
            </a>
          </div>
          <div className="footer_left__social">
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_left__social_link"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_left__social_link"
            >
              <FaInstagram />
            </a>
            <a
              href="a"
              onClick={(e) => e.preventDefault()}
              className="footer_left__social_link"
            >
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className="footer_right">
          <h2>Newsletter</h2>
          <p>
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form>
            <input type="email" required />
            <div className="input_error__text">Check your email please</div>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-image: url("/images/bg-footer-top-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top left;
  background-color: var(--dark);

  padding: 180px 0 102.53px;
  @media (max-width: 548px) {
    background-image: url("/images/bg-footer-top-desktop.svg");
  }
  .footer {
    max-width: 1248px;
    padding: 0 24px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    @media (max-width: 548px) {
      flex-direction: column-reverse;
    }
    &_left {
      padding-top: 100px;
      @media (max-width: 548px) {
        padding-top: 50px;
        width: 100%;
      }
      &__logo {
        width: calc(100px + 19.246vmin);
        img {
          width: 100%;
          height: auto;
        }
      }
      & > p {
        padding-top: 26px;
        padding-bottom: 12px;
        max-width: 327px;
        font-weight: 400;
        font-size: 14px;
        line-height: 170%;
        letter-spacing: 0.018em;
        color: var(--light);
        @media (max-width: 548px) {
          max-width: 100%;
        }
      }
      &__option {
        max-width: 376px;
        padding: 12px 0;
        display: flex;
        gap: 18px;
        font-size: 18px;
        color: var(--light);
        align-items: center;
        &__link {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: var(--light);
          text-decoration: none;
        }
      }
      &__social {
        padding-top: 81px;
        display: flex;
        gap: 24px;
        &_link {
          color: var(--light);
          font-size: 32px;
          &:hover {
            color: var(--blue);
          }
        }
      }
    }
    &_right {
      width: min(520px, 100%);
      color: var(--light);
      padding-top: 105px;
      @media (max-width: 548px) {
        padding-top: 50px;
        width: 100%;
      }
      & > h2 {
        font-family: var(--font-secondary);
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      & > p {
        max-width: 340px;
        padding-top: 19px;
        font-weight: 600;
        font-size: 14px;
        line-height: 170%;
      }
      & > form {
        position: relative;
        display: flex;
        padding-top: 40px;
        @media (max-width: 548px) {
          flex-direction: column;
        }
        & > input {
          background-color: var(--light);
          width: min(319px, 100%);
          border-radius: 7px;
          padding: 12px 15px;
          margin-right: 41px;
          outline: 0;
          border: 1px solid transparent;
          @media (max-width: 548px) {
            margin: 0;
            margin-bottom: 30px;
            width: 100%;
          }
          &:focus {
            border: 1px solid var(--pink);
          }
        }
        & > input + .input_error__text {
          display: none;
          position: absolute;
          color: var(--red);
          font-weight: 600;
          font-size: 14px;
          line-height: 170%;
          top: 80px;
        }
        & > input:focus:invalid + .input_error__text {
          display: inline-block;
        }
        & > button {
          flex: 1;
          background-color: var(--pink);
          width: min(160px, 100%);
          border-radius: 7px;
          border: 0;
          outline: 0;
          color: var(--light);
          margin-left: auto;
          padding: 14px 20px 15px;
          text-align: center;
        }
      }
    }
  }
`;
