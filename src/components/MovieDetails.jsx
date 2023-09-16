import React from "react";
import styled from "styled-components";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import youtube from "../assets/youtube.svg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 30%;
  margin: 30px 0 150px 0;

  ${mobile({
    width: "100%",
    marginTop: "60px",
  })}
`;

const Title = styled.h1``;

const RatingsContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Imdb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ImdbImg = styled.img`
  margin-right: 5px;
`;

const ImdbText = styled.p``;

const RT = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RTImg = styled.img`
  margin-right: 5px;
`;

const RTText = styled.p``;

const Synopsis = styled.p``;

const Trailer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: red;
  color: white;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
`;

const TrailerImg = styled.img`
  margin-right: 5px;
  fill: white;
  height: 24px;
  width: 24px;
  border-radius: 50%;
`;

const TrailerText = styled.p``;

const MovieDetails = () => {
  return (
    <>
      <Container>
        <Title>John Wick 3: Parabellum</Title>
        <RatingsContainer>
          <Imdb>
            <ImdbImg src={imdb} alt="imdbImg" />
            <ImdbText>86.0/100</ImdbText>
          </Imdb>
          <RT>
            <RTImg src={tomato} alt="tomatoImg" />
            <RTText>97%</RTText>
          </RT>
        </RatingsContainer>
        <Synopsis>
          John Wick is declared excommunicado and a hefty bounty is set on him
          after he murders an international crime lord. He sets out to seek help
          to save himself from ruthless hitmen and bounty hunters
        </Synopsis>
        <Trailer>
          <TrailerImg src={youtube} alt="youtubeImg" />
          <TrailerText>WATCH TRAILER</TrailerText>
        </Trailer>
      </Container>
    </>
  );
};

export default MovieDetails;
