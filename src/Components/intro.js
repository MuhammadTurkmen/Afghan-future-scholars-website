import React from "react";
import styled from "styled-components";
import Image from "../Images/girl-working.jpeg";
import { Link } from "react-router-dom";

function intro() {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">Who We Are</h1>
        <div className="underline"></div>
        <div className="text-container">
          <div className="left-container">
            <h3>Afghanistan Future Scholars Organization</h3>
            <p>
              Afghanistan Future Scholars (AFS) was founded in 2022 by a group
              of passionate and educated young Afghan girls and boys who
              recognized the urgent need to address the educational disparities
              facing Afghan girls.
              <br />
              <br />
              <br />
              They believed that every girl, regardless of her circumstances,
              deserves the opportunity to learn, grow, and shape her future.
              With this vision, Afghanistan Future Scholars was established as a
              nonprofit, nonpolitical, nonsectarian, and nongovernmental
              organization, dedicated to empowering the young women of
              Afghanistan through education.
            </p>
            <Link to="/about">Learn More</Link>
          </div>
          <img className="girl" src={Image} alt="girl working" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    text-align: center;
    padding: 12rem 2rem;
  }

  .text-container {
    display: flex;
    text-align: start;
    gap: 5rem;
    margin-top: 5rem;
    align-items: start;
  }

  .title {
    margin: 0;
    font-size: 40px;
    font-weight: 600;
  }

  .underline {
    width: 200px;
    height: 5px;
    background-color: #73d1fa;
    margin: 0 auto;
    border-radius: 2px;
  }

  .girl {
    width: 586px;
    height: 619px;
    object-fit: cover;
    border-radius: 100px 0 100px 0;
  }

  h3 {
    font-size: 30px;
    margin: 0;
  }

  p {
    font-size: 24px;
    line-height: 40.8px;
  }

  a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    padding: 0.8rem 2rem;
    background-color: #73d1fa;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    margin-top: 1.5rem;
  }

  a:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  @media only screen and (max-width: 800px) {
    .container {
      padding: 4.35rem 2rem;
      padding-bottom: 10rem;
    }
    .text-container {
      text-align: center;
    }

    .girl {
      display: none;
    }

    .title {
      font-size: 20px;
    }

    .underline {
      height: 2px;
      width: 66px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
      line-height: 32px;
    }
  }
`;

export default intro;
