import React from "react";
import styled from "styled-components";
import image from "../Images/main.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">
          Empowering Afghan Women through <br /> Education. Support Afghanistan{" "}
          <br />
          Future Scholars in Building a <br /> Brighter Future.
        </h1>
        <p>Afghanistan Future Scholars Organization</p>
        <div className="btn-container">
          <Link to="/">Donate us</Link>
          <Link to="/involved">Get Involved</Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${image});
  background-position: 0;
  background-size: cover;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 0;
    color: white;
    text-align: center;
  }
  h1 {
    font-size: 50px;
  }

  p {
    font-size: 28px;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;

    a {
      color: #000;
      text-decoration: none;
      font-size: 18px;
      padding: 0.8rem 2rem;
      background-color: #73d1fa;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      transform: scale(1.1);
    }
  }
`;

export default Hero;
