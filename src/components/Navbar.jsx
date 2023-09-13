import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";

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

const LeftText = styled.h3``;
const Center = styled.div`
  width: 300px;
  height: 30px;
`;

const SearchContainer = styled.div`
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

const Navbar = () => {
  return (
    <>
      <Container>
        <Left>
          <LeftImg src={logo} alt="moviebox logo" />
          <LeftText>MovieBox</LeftText>
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
    </>
  );
};

export default Navbar;
