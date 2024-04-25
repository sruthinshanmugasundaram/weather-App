import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaLanguage } from "react-icons/fa";
import { MdSupervisorAccount, MdInbox, MdShare } from "react-icons/md";
import { BiStats } from "react-icons/bi";

const TopNav = ({ isScrolled }) => {
  const [language, setLanguage] = useState("English");
  const [clickedIndex, setClickedIndex] = useState(null); // State to manage clicked icon index
  const navigate = useNavigate();

  const navIcons = [
    { icon: <MdShare />, link: "/share" },
    { icon: <MdInbox />, link: "/inbox" },
    { icon: <MdSupervisorAccount />, link: "/supervisor" },
    { icon: <FaChartLine />, link: "/stats" }, // Added Growth Statistics Circle Icon
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/Delete");
    });

    return () => unsubscribe(); // Cleanup function for useEffect
  }, [navigate]); // Dependency array to ensure useEffect runs only when navigate changes

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSignOut = () => {
    signOut(firebaseAuth);
    navigate("/Delete");
  };

  const handleIconClick = (index) => {
    setClickedIndex(index); // Update the clicked index
  };

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <ul className="links">
            {navIcons.map(({ icon, link }, index) => (
              <li key={link}>
                <Link to={link}>
                  <IconWrapper
                    onClick={() => handleIconClick(index)}
                    clicked={clickedIndex === index} // Pass clicked state as prop
                  >
                    {icon.type === FaLanguage ? (
                      <iframe srcDoc={icon.props.children} title={link} />
                    ) : (
                      icon
                    )}
                  </IconWrapper>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightSide">
          <button onClick={handleSignOut}><strong>Sign Out</strong></button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  nav {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 5rem; /* Decreased width of the navbar */
    background-color: #4169E1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    z-index: 2;
    transition: 0.3s ease-in;
  }

  /* Other styles remain unchanged */

  .links {
    list-style-type: none; /* Remove bullet points */
  }

  .links li a:hover {
    color: #ff4500; /* Change the hover color of the links */
  }
  
  .rightSide button:hover {
    background-color: #ff4500; /* Change the hover background color of the button */
    color: white; /* Change the hover text color of the button */
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Added transition for background color change */

  &:hover {
    transform: scale(1.2); /* Increase the size of the icon on hover */
    background-color: #ff4500; /* Change the background color on hover */
  }

  svg {
    color: ${({ clicked }) => (clicked ? "white" : "white")}; /* Change the color if clicked */
    font-size: 2rem; /* Increase the size of the icon */
    transition: color 0.3s ease; /* Added transition for color change */
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  &:hover svg {
    color: #ff4500; /* Change the color of the icon on hover */
  }
`;

export default TopNav;
