import React from "react";
import styled from "styled-components";
import { involvedData } from "../../Data";

function GetInvolved() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Get Involved</h1>
        <div className="underline"></div>
        <p>
          Join us in our mission to empower Afghan girls through education. Here
          are some ways you can make a difference. Get involved today and be a
          part of creating a brighter future for Afghan girls through education.
        </p>

        <div className="invovled-container">
          {involvedData.map(({ img, title, desc }, index) => {
            return (
              <div className="card" key={index}>
                <img src={img} alt={title} />
                <h2>{title}</h2>
                <h4>{desc}</h4>
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
    padding: 5rem 2rem;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 50px;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  .invovled-container {
    display: flex;
    margin-top: 5rem;
    gap: 3rem;
  }

  img {
    width: 310px;
    height: 310px;
    border-radius: 100%;
    border: 10px solid #73d1fa;
    object-fit: cover;
  }

  h2 {
    font-size: 30px;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 43px;
  }

  .underline {
    height: 5px;
    width: 200px;
    background-color: #73d1fa;
    margin: 0 auto;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 30px;
    }

    .underline {
      width: 100px;
      height: 3px;
    }

    p {
      font-size: 16px;
    }

    .invovled-container {
      flex-direction: column;
    }

    img {
      width: 244px;
      height: 244px;
    }

    h2 {
      font-size: 20px;
    }

    h4 {
      font-size: 16px;
    }
  }
`;

export default GetInvolved;
