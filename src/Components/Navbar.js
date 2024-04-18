import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Images/Logo.png";
import { links } from "../Data";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div className={isOpen ? "links-container open" : "links-container"}>
          <span>
            <MdClose
              className="x"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </span>
          {links.map(({ name, path }, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                key={index}
                onClick={() => setIsOpen(false)}
                to={path}>
                {name}
              </NavLink>
            );
          })}
          <Link
            to="/involved"
            className="donate"
            onClick={() => setIsOpen(false)}>
            Donate us
          </Link>
        </div>
        <Link className="donate" to="/involved">
          Donate Us
        </Link>
        <span className="bars">
          <RiMenu4Fill onClick={() => setIsOpen(true)} />
        </span>
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

    span {
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

  .bars {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    .container {
      padding-right: 1rem;
    }

    .links-container {
      position: fixed;
      background-color: #73d1fa;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      padding-right: 44px;
      padding-left: 44px;

      a {
        font-size: 20px;
      }

      a:hover {
        color: #06b2fd;
      }

      .donate {
        display: block;
        margin: 0 auto;
        margin-top: auto;
        margin-bottom: 2rem;
        background-color: #06b2fd;
      }

      .donate:hover {
        color: black;
      }

      span {
        display: block;
        font-size: 40px;
        margin-top: 40px;
        margin-bottom: 57px;
        margin-right: -1rem;
        transition: all 0.3s ease-in-out;
      }

      span:hover {
        transform: scale(1.2);
      }
    }
    .active {
      color: black !important;
    }

    .open {
      display: flex;
    }
    .donate {
      padding: 0.5rem 1.5rem;
      margin-left: auto;
      font-size: 16px;
    }
    .bars {
      font-size: 40px;
      margin-left: 1rem;
      margin-bottom: -0.5rem;
      display: block;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export default Navbar;
