import React from "react";
import styled from "styled-components";
import Logo from "../Images/Logo.png";
import { links } from "../Data";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div className="links-container">
          {links.map(({ name, path }, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                key={index}
                to={path}>
                {name}
              </NavLink>
            );
          })}
          <Link to="/involved" className="donate">
            Donate us
          </Link>
        </div>
        <Link className="donate" to="/">
          Donate Us
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background-color: white;
  .container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
  }

  .logo {
    width: 100px;
    margin-bottom: -1.5rem;
  }

  .links-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: #000;
      font-size: 18px;
      transition: all 0.2s ease-in-out;
    }

    a:hover {
      color: #73d1fa;
      transform: scale(1.1);
    }

    .donate {
      display: none;
    }
  }

  .donate {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    padding: 0.8rem 2rem;
    background-color: #73d1fa;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .donate:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .active {
    color: #73d1fa !important;
  }

  @media only screen and (max-width: 800px) {
    .links-container {
      position: fixed;
      background-color: red;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      padding-right: 44px;

      a {
        font-size: 20px;
      }

      .donate {
        display: block;
        margin: 0 auto;
        margin-top: auto;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default Navbar;
