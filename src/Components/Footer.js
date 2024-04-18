import React from "react";
import styled from "styled-components";
import { socials, reachUs } from "../Data";

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="first-container">
          <h1 className="title">Afghanistan Future Scholars</h1>
          <p className="sub-title">
            Empowering Afghan Women through <br /> Education. Support
            Afghanistan Future <br /> Scholars in Building a Brighter Future.
          </p>
        </div>
        <div className="second-container">
          <h1>Social</h1>
          <div className="social-container">
            {socials.map(({ text, icon }, index) => {
              return (
                <div className="socials" key={index}>
                  {icon}
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="third-container">
          <h1>Reach Us</h1>
          <div className="reach-container">
            {reachUs.map(({ icon, text }, index) => {
              return (
                <div className="reach" key={index}>
                  {icon}
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="black-container">
        <h4>
          Designed and developed by <span>Zainab Turkmen</span> and{" "}
          <span>Muhammad Turkmen</span>
        </h4>
        <p>All Rights Reserved 2024. Afghanistan Future Scholars</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #131212;
  color: white;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 8rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .sub-title {
    font-size: 18px;
    line-height: 40px;
    margin-top: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    margin-bottom: 1.5rem;
  }

  .socials,
  .reach {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 30px;

    p {
      font-size: 20px;
    }
  }

  .black-container {
    text-align: center;
    padding: 2.5rem;
    background-color: black;
    color: white;

    p {
      font-size: 12px;
    }
  }

  h4 {
    font-weight: 500;
    span {
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      gap: 8rem;
    }
  }
`;

export default Footer;
