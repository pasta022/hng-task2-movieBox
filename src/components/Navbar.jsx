import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
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

const Center = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  width: 85%;
  border: none;
  background-color: transparent;
  color: white;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: white;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightText = styled.h3`
  margin-right: 10px;
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
          <Center>
            <SearchContainer>
              <SearchInput placeholder="What do you want to watch?" />
              <Search />
            </SearchContainer>
          </Center>
          <Right>
            <RightText>Sign In</RightText>
            <RightImg src={menu} alt="menuImg" />
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
          <Center>
            <SearchContainer>
              <SearchInput placeholder="What do you want to watch?" />
              <Search />
            </SearchContainer>
          </Center>
          <Right>
            <RightText>Sign In</RightText>
            <RightImg src={menu} alt="menuImg" />
          </Right>
        </NavbarMovie>
      )}
    </>
  );
};

export default Navbar;
