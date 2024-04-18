import React from "react";
import styled from "styled-components";
import { allPrograms } from "../Data";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">International Tests Preparation</h1>
        <div className="underline"></div>
        <p>
          At Afghanistan Future Scholars (AFS), we offer a range of programs
          designed to empower Afghan girls and provide them with the skills and
          opportunities they need to succeed These programs are integral to our
          mission of empowering Afghan girls through education and ensuring they
          have the resources and support needed to achieve their dreams. Our
          programs include:
        </p>
        <div className="programs-container">
          {allPrograms.map(({ img, title, desc }, index) => {
            return (
              <div className="card" key={index}>
                <img src={img} alt={title} />
                <div className="text-container">
                  <h2>{title}</h2>
                  <div className="underline"></div>
                  <h4>{desc}</h4>
                  <Link to="/contact">Learn More</Link>
                </div>
              </div>
            );
          })}
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
    padding: 8rem 2rem;
  }

  .title {
    font-size: 50px;
    margin: 0;
  }
  .underline {
    width: 200px;
    height: 5px;
    background-color: #73d1fa;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    margin-top: 3.5rem;
    word-spacing: 5px;
  }

  .programs-container {
    margin-top: 9rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .card {
    display: flex;
    gap: 3rem;
  }

  h2 {
    font-size: 40px;
    margin: 0;
  }

  h4 {
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
    margin-top: 3rem;
  }

  img {
    width: 582px;
    height: 502px;
    object-fit: cover;
    border-radius: 20px;
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
    /* justify-self: flex-end; */
    margin-top: auto;
    margin-bottom: 1rem;
  }

  a:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  @media only screen and (max-width: 800px) {
    .container {
      padding: 2rem 2rem;
      padding-bottom: 10rem;
    }

    .title {
      font-size: 30px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 16px;
    }

    .underline {
      margin: 0 auto;
      width: 107px;
    }

    .programs-container {
      gap: 10rem;
    }

    .card {
      flex-direction: column-reverse;
    }
    h2 {
      font-size: 20px;
    }
    h4 {
      text-align: center;
      font-size: 16px;
    }

    .text-container {
      align-items: center;
    }

    img {
      width: 100%;
      height: 225px;
    }
  }
`;

export default Programs;
