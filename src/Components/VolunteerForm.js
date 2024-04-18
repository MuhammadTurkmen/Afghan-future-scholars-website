import React from "react";
import styled from "styled-components";

function VolunteerForm() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Become a Volunteer </h1>
        <div className="underline"></div>
        <form className="form">
          <h2>Volunteer Sign up Form</h2>
          {/* First Name and second name container */}
          <div className="nameContainer">
            {/* First Name */}
            <div className="card">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="" id="firstName" required />
            </div>

            {/* Last Name */}
            <div className="card">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="" id="lastName" required />
            </div>
          </div>
          {/* Email input */}
          <div className="card">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" required />
          </div>
          {/* Phone Number input */}
          <div className="card">
            <label htmlFor="number">Phone Number</label>
            <input type="number" name="" id="number" required />
          </div>
          {/* availability input */}
          <div className="card">
            <label htmlFor="availability">Availability</label>
            <input type="text" name="" id="availability" required />
          </div>

          {/* Submit From */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 10rem 2rem;
  }

  h1 {
    font-size: 50px;
    margin: 0;
    text-align: center;
  }

  .underline {
    width: 192px;
    height: 5px;
    background-color: #73d1fa;
    margin: 0 auto;
  }

  h2 {
    font-size: 36px;
    margin: 0;
    margin-bottom: 4rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 5rem;
    border: 1px solid #464141;
    border-radius: 40px;
    width: 900px;
    margin: 0 auto;
    padding: 6rem 8rem;
    margin-top: 4rem;
    box-sizing: border-box;
  }

  .nameContainer {
    display: flex;
    gap: 2rem;
  }

  .card {
    position: relative;
    flex: 1;
  }
  input {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem 1rem;
    border-radius: 8px;
    font-size: 24px;
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 2rem;
    padding: 0 1rem;
    z-index: 999;
    font-size: 24px;
    background-color: white;
  }

  button {
    background-color: #73d1fa;
    padding: 1rem 0;
    border: none;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
  }

  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 20px;
    }

    .underline {
      height: 3px;
      width: 107px;
    }

    .form {
      width: 100%;
      padding: 4rem 2.3rem;
      gap: 2.5rem;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 0;
    }

    .nameContainer {
      flex-direction: column;
    }

    input {
      padding: 0.8rem 1rem;
      font-size: 16px;
      border: 1px solid #464141;
    }

    label {
      font-size: 16px;
      top: -0.6rem;
    }

    button {
      font-size: 16px;
    }
  }
`;

export default VolunteerForm;
