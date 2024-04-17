import React from "react";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";

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

            {/* text Area */}
            <label htmlFor="message">Your Message</label>
            <textarea name="" id="message" rows="5"></textarea>
          </form>
          <div className="text-container">
            <h2>
              If you prefer to contact us another way, feel free to reach us
              below:
            </h2>
            <p>
              <FaPhoneAlt /> +93 7882 75519
            </p>
            <p>
              <MdLocalPostOffice /> Afg.future.scholars.org.@gmail.com
            </p>
            <div className="Links-container">
              <a href="https://www.facebook.com" target="_blank">
                Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank">
                Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank">
                {" "}
                Instagram
              </a>
              <a href="https://www.linkedIn.com" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
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

  .form-container {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    gap: 4rem;
  }

  .form {
    width: 687px;
    border-radius: 15px;
    background-color: #9bdaf547;
    padding: 3rem 3.2rem;
    padding-top: 2rem;
  }

  input {
    display: block;
    width: 100%;
    padding: 1rem 1rem;
    border: none;
    font-size: 24px;
    box-sizing: border-box;
    border-radius: 5px;
  }

  label {
    font-size: 24px;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  textArea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 24px;
    padding: 1rem;
    box-sizing: border-box;
    line-height: 30px;
  }

  p {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  h2 {
    font-weight: 400;
    margin-bottom: 4rem;
  }

  .Links-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  a {
    font-size: 20px;
    color: #000;
  }
`;

export default Contact;
