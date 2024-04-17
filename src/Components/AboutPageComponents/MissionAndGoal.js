import React from "react";
import styled from "styled-components";
import { missionAndGoal } from "../../Data";

function MissionAndGoal() {
  return (
    <Wrapper>
      <div className="container">
        {missionAndGoal.map(({ img, title, desc }, index) => {
          return (
            <div className="card" key={index}>
              <img src={img} alt={title} />
              <div>
                <h1>{title}</h1>
                <div className="underline"></div>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
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
    display: flex;
    flex-direction: column;
    gap: 7rem;
  }

  .underline {
    width: 200px;
    height: 5px;
    margin: 0 auto;
    background-color: #73d1fa;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 5rem;
    text-align: center;
  }

  .card:nth-last-child(2) {
    flex-direction: row-reverse;
  }
  img {
    width: 570px;
    height: 502px;
    object-fit: cover;
    border-radius: 100px 0 100px 0;
  }

  h1 {
    font-size: 50px;
    margin: 0;
  }

  p {
    font-size: 24px;
    line-height: 40px;
  }
`;

export default MissionAndGoal;
