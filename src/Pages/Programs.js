import React from "react";
import styled from "styled-components";
import { allPrograms } from "../Data";

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
                <div className="text">
                  <h2>{title}</h2>
                  <h4>{desc}</h4>
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
`;

export default Programs;
