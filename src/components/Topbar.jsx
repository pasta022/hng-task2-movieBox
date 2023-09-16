import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/media/coverImg.jpg");
  background-size: cover;
  color: white;

  ${mobile({
    backgroundImage: "url('/media/coverImg2.jpeg')",
    backgroundSize: "cover",
  })}
`;

const Container2 = styled.div`
  width: 90%;
`;

const Topbar = () => {
  return (
    <>
      <Container>
        <Container2>
          <Navbar />
          <MovieDetails />
        </Container2>
      </Container>
    </>
  );
};

export default Topbar;
