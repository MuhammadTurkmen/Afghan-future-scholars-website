import React from "react";
import styled from "styled-components";
import Image from "../../Images/coffee-with-book.jpeg";

function AboutUs() {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container">
          <h1>About us</h1>
          <div className="underline"></div>
          <p>
            Afghanistan Future Scholars (AFS) was founded in 2022 by a group of
            passionate and educated young Afghan girls and boys who recognized
            the urgent need to address the educational disparities facing Afghan
            girls. They believed that every girl, regardless of her
            circumstances, deserves the opportunity to learn, grow, and shape
            her future.{" "}
          </p>
        </div>
        <div className="images-container">
          <div className="small-container">
            <img src={Image} alt="coffee" />
            <img src={Image} alt="coffee" />
          </div>
          <img src={Image} alt="coffee" />
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
    display: flex;
    align-items: center;
    gap: 5rem;
    text-align: center;
  }

  h1 {
    font-size: 50px;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 24px;
    line-height: 40px;
  }

  .underline {
    width: 190px;
    height: 5px;
    background-color: #73d1fa;
    margin: 0 auto;
  }

  .images-container {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .small-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  img {
    width: 304px;
    height: 300px;
    object-fit: cover;
    border: 10px solid #73d1fa;
    border-radius: 100px 0 100px 0;
  }
`;

export default AboutUs;
