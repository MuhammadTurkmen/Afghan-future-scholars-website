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
              <NavLink activeClassName="active" key={index} to={path}>
                {name}
              </NavLink>
            );
          })}
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
`;

export default Navbar;
