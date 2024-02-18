import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaLanguage } from "react-icons/fa";

const TopNav = ({ isScrolled }) => {
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });

    return () => unsubscribe(); // Cleanup function for useEffect
  }, [navigate]); // Dependency array to ensure useEffect runs only when navigate changes

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSignOut = () => {
    signOut(firebaseAuth);
    navigate("/login");
  };

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightSide">
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
          <FaLanguage className="language-icon" />
          <button onClick={handleSignOut}><strong>Sign Out</strong></button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in;
    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 2rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 3rem;
    color: white;
    select {
      background-color: white;
      border: none;
      border-radius: 10%;
      padding: 0.5rem;
    }
    button {
      background-color: white;
      border: none;
      cursor: pointer;
      border-radius: 10%;
      padding: 1rem;
      &:focus {
        outline: none;
      }
    }
    svg {
      color: white;
      font-size: 3rem;
    }
  }
`;

export default TopNav;
