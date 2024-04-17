import React from "react";
import styled from "styled-components";
import { milestones_cards } from "../Data";
import { Link } from "react-router-dom";

function Milestones() {
  return (
    <Wrapper>
      <div className="milestones-container">
        <h1 className="title">Our Current Milestones</h1>
        <div className="underline"></div>
        <div className="card-container">
          {milestones_cards.map(({ title, desc, img }, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${img})`,
                }}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <Link to="/programs">Read More</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="success-container">
        <h1 className="title">Our Success</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;

  .milestones-container,
  .success-container {
    max-width: 1300px;
    margin: 0 auto;
    /* text-align: center; */
    padding: 0 2rem;
    text-align: center;
  }

  .title {
    font-size: 40px;
    margin: 0;
  }

  .underline {
    width: 200px;
    background-color: #73d1fa;
    border-radius: 2px;
    height: 5px;
    margin: 0 auto;
    margin-top: 0.5rem;
  }

  .card-container {
    display: flex;
    gap: 3rem;
    justify-content: center;
    color: white;
    text-align: center;
    margin-top: 4.5rem;
  }
  .card {
    width: 380px;
    padding: 2.8rem 2.4rem;
    background-size: cover !important;
    background-position: center !important;
    box-sizing: border-box;
    border-radius: 10px;

    h1 {
      font-size: 40px;
      margin: 0;
    }
    p {
      font-size: 20px;
      line-height: 44px;
      margin: 2.8rem 0;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    padding: 0.8rem 2rem;
    background-color: #73d1fa;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    display: inline-block;
  }

  a:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

export default Milestones;
