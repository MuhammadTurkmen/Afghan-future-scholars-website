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

      {/* second container */}
      <div className="success-container">
        <h1 className="title">Our Success</h1>
        <div className="underline"></div>
        <div className="boxs-container">
          {/* box 1 */}
          <div className="box">
            <h1>15K+</h1>
            <p>Number of students</p>
          </div>

          {/* box 2 */}
          <div className="box">
            <h1>75%</h1>
            <p>Percentage of success</p>
          </div>

          {/* box 3 */}
          <div className="box">
            <h1>35</h1>
            <p>Numbers of questions</p>
          </div>

          {/* box 4 */}
          <div className="box">
            <h1>25+</h1>
            <p>Number of experts</p>
          </div>

          {/* box 5 */}
          <div className="box">
            <h1>15+</h1>
            <p>Years of experience</p>
          </div>
        </div>
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
    transform: scale(1.1);
  }

  /* Success Container styles */

  .success-container {
    margin-top: 14rem;
    margin-bottom: 10rem;
  }

  .boxs-container {
    display: flex;
    margin-top: 2.2rem;

    .box {
      background-color: #9bdaf54f;
      padding: 2.5rem 2rem;
      flex: 1;
    }

    .box:nth-last-child(2),
    .box:nth-last-child(4) {
      background-color: #25b8f83b;
      border: 3px solid #9bdaf54f;
    }

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 19px;
    }
  }

  @media only screen and (max-width: 800px) {
    /* First Container Styles */

    .card-container {
      flex-direction: column;
      margin-top: 3rem;
    }

    .underline {
      height: 2px;
      width: 66px;
    }

    .title {
      font-size: 20px;
    }

    .card {
      width: 100%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 16px;
      }
    }

    /* Second contianer Styles */
    .success-container {
      padding: 0 4rem;
      margin-top: 6rem;
    }
    .boxs-container {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

export default Milestones;
