import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Circle, PlayCircleFilledWhiteTwoTone } from "@mui/icons-material";

const Div = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  padding: 20px;
`;

const Trailer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const TrailerImg = styled.img`
  width: 80%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Info = styled.div``;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px 0;
  font-size: 20px;
  color: #3c3c3c;
`;

const Title = styled.div`
  margin-right: 10px;
`;

const ReleaseDate = styled.div`
  margin: 0 10px;
`;

const Runtime = styled.div`
  margin: 0 10px;
`;
const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #3c3c3c;
`;

const OverviewTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const OverviewText = styled.div`
  font-size: 18px;
  font-weight: 200;
`;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [tmdbMovie, setTmbdMovie] = useState(null);

  //api info
  const apiKey = "3685919de6d6123451bc68adcb6632df";
  const baseURL = "https://api.themoviedb.org";
  const endPoint1 = "/3/find/";
  const endPoint2 = "/3/movie/";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${baseURL}${endPoint1}${id}`, {
          params: {
            api_key: apiKey,
            language: "en-US",
            external_source: "imdb_id",
          },
        });
        setMovie(...res.data.movie_results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [id]);

  useEffect(() => {
    if (movie) {
      const getTmbdMovie = async () => {
        try {
          const res = await axios.get(`${baseURL}${endPoint2}${movie.id}`, {
            params: {
              api_key: apiKey,
              language: "en-US",
            },
          });
          setTmbdMovie(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      getTmbdMovie();
    }
  }, [movie]);

  return (
    <>
      <Div>
        <Navbar />
        {movie && (
          <Container>
            <Trailer>
              <TrailerImg
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <PlayIcon>
                <PlayCircleFilledWhiteTwoTone
                  htmlColor="white"
                  sx={{ fontSize: 120 }}
                />
              </PlayIcon>
            </Trailer>
            <Info>
              <Details>
                <Title>{movie.title}</Title>
                <Circle sx={{ fontSize: 10 }} htmlColor="grey" />
                <ReleaseDate>{movie.release_date}</ReleaseDate>
                <Circle sx={{ fontSize: 10 }} htmlColor="grey" />
                {tmdbMovie && <Runtime>{tmdbMovie.runtime} minutes</Runtime>}
              </Details>
              <OverviewContainer>
                <OverviewTitle>Synopsis: </OverviewTitle>
                <OverviewText>{movie.overview}</OverviewText>
              </OverviewContainer>
            </Info>
          </Container>
        )}
      </Div>
    </>
  );
};

export default Movie;
