import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Contact Us</h1>
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
`;

export default Contact;
