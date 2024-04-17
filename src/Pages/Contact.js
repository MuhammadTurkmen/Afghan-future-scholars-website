import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Contact Us</h1>
        <div className="form-container">
          <form className="form">
            {/* Name input */}
            <label htmlFor="name">Your Name</label>
            <input type="text" name="" id="name" />

            {/* Email input */}
            <label htmlFor="email">Email Address</label>
            <input type="text" name="" id="email" />

            {/* Phone Number input */}
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="" id="phone" />
          </form>
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

  h1 {
    text-align: center;
    font-size: 80px;
    font-weight: 500;
    margin: 0;
  }
`;

export default Contact;
