import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Poster = styled.img`
  height: 150px;
  width: 100px;
  object-fit: cover;
  margin: 0 10px;
`;

const Details = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  color: #3c3c3c;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Hr = styled.hr``;

const ReleaseDate = styled.div``;

const Result = ({ result }) => {
  return (
    <Container>
      <ResultContainer>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          alt="image"
        />
        <Details>
          <Title>{result.title}</Title>
          <Hr></Hr>
          <ReleaseDate>Release Date: {result.release_date}</ReleaseDate>
        </Details>
      </ResultContainer>
    </Container>
  );
};

export default Result;
