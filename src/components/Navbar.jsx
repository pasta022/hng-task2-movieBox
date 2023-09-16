import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  ${mobile({
    position: "relative",
    height: "auto",
  })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftImg = styled.img`
  margin-right: 10px;
  margin-left: 2px;
  width: 36px;
  height: 36px;
`;

const LeftText = styled.h3`
  color: white;
`;

const CenterContainer = styled.div`
  ${mobile({
    position: "absolute",
    top: "100%",
    left: "50%",
    width: "100%",
    height: "40px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translate(-50%, -25%)",
    backgroundColor: "#1f1f1f",
    marginTop: "5px",
  })}
`;

const Center1 = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;

  ${mobile({
    position: "absolute",
    top: "100%",
    margin: "20px 0",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })}
`;

const Center2 = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;

  /* ${mobile({
    position: "absolute",
    top: "100%",
    margin: "20px 0",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })} */
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightText = styled.h3`
  margin-right: 10px;

  ${mobile({
    display: "none",
  })}
`;

const RightIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightImg = styled.img`
  margin-right: 5px;
`;

const NavbarMovie = styled.div`
  color: white;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  z-index: 99;

  ${mobile({
    position: "relative",
    height: "auto",
  })}
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Container>
          <Left>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LeftImg src={logo} alt="moviebox logo" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LeftText>MovieBox</LeftText>{" "}
            </Link>
          </Left>
          <Center1>
            <SearchBar />
          </Center1>
          <Right>
            <RightText>Sign In</RightText>
            <RightIcon>
              <RightImg src={menu} alt="menuImg" />
            </RightIcon>
          </Right>
        </Container>
      ) : (
        <NavbarMovie>
          <Left>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LeftImg src={logo} alt="moviebox logo" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LeftText>MovieBox</LeftText>{" "}
            </Link>
          </Left>
          <CenterContainer>
            <Center2>
              <SearchBar />
            </Center2>
          </CenterContainer>
          <Right>
            <RightText>Sign In</RightText>
            <RightIcon>
              <RightImg src={menu} alt="menuImg" />
            </RightIcon>
          </Right>
        </NavbarMovie>
      )}
    </>
  );
};

export default Navbar;
