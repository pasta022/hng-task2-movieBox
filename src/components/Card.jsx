import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
  flex: 1;
  box-sizing: border-box;
`;

const PosterContainer = styled.div`
  position: relative;
`;

const Ranking = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #737373;
  top: 0;
`;

const Rank = styled.p`
  color: whitesmoke;
`;

const Poster = styled.img`
  height: 350px;
  width: 250px;
  object-fit: cover;
`;

const Title = styled.h5`
  margin: 7px 0;
  font-size: 18px;
  font-weight: 600;
`;

const ReleaseDate = styled.p``;

const Card = ({ poster, title, release, ranking }) => {
  return (
    <>
      <Container>
        <PosterContainer>
          <Ranking>
            <Rank>{ranking}</Rank>
          </Ranking>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt="movie poster"
          />
        </PosterContainer>
        <Title>{title}</Title>
        <ReleaseDate>Release Date: {release}</ReleaseDate>
      </Container>
    </>
  );
};

export default Card;
