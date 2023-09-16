import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Circle, PlayCircleFilledWhiteTwoTone } from "@mui/icons-material";
import Error from "./Error";
import { mobile } from "../responsive";

const Div = styled.div`
  margin: 0;
  padding: 0;
`;
const MovieContainer = styled.div``;

const Container = styled.div`
  padding: 20px;

  ${mobile({
    marginTop: "70px",
  })}
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

  ${mobile({
    fontSize: "15px",
  })}
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
  //component variables
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [tmdbMovie, setTmbdMovie] = useState(null);
  const [error, setError] = useState(false);
  const [releaseDate, setReleaseDate] = useState("");
  const [utcDate, setUtcDate] = useState("");

  //api info
  const apiKey = "3685919de6d6123451bc68adcb6632df";
  const baseURL = "https://api.themoviedb.org";
  // const endPoint1 = "/3/find/";
  const endPoint2 = "/3/movie/";

  useEffect(() => {
    //function to get movie
    const getMovie = async () => {
      try {
        const res = await axios.get(`${baseURL}${endPoint2}${id}`, {
          params: {
            api_key: apiKey,
            language: "en-US",
            // external_source: "imdb_id",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    //call function
    getMovie();
  }, [id]);

  useEffect(() => {
    //occurs when movie variable is truthy
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

      //call function
      getTmbdMovie();
    }
  }, [movie]);

  useEffect(() => {
    if (movie) {
      //function to get release date in UTC
      const getUTCTime = () => {
        setReleaseDate(movie.release_date);
        const dates = releaseDate.split("-");

        if (dates.length === 3) {
          const year = parseInt(dates[0]);
          const month = parseInt(dates[1] - 1);
          const day = parseInt(dates[2]);

          const date = new Date(Date.UTC(year, month, day));

          setUtcDate(date.toISOString());
        }
      };

      //call function
      getUTCTime();
    }
  }, [movie, releaseDate]);

  return (
    <>
      <Div>
        <Navbar />
        {error ? (
          <Error message="Sorry!. An error occured fetching data..." />
        ) : (
          <MovieContainer>
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
                    <Title data-testid="movie-title">{movie.title}</Title>
                    <Circle sx={{ fontSize: 10 }} htmlColor="grey" />
                    <ReleaseDate data-testid="movie-release-date">
                      {utcDate}
                    </ReleaseDate>
                    <Circle sx={{ fontSize: 10 }} htmlColor="grey" />
                    <Runtime data-testid="movie-runtime">
                      {movie.runtime} minutes
                    </Runtime>
                  </Details>
                  <OverviewContainer>
                    <OverviewTitle>Synopsis: </OverviewTitle>
                    <OverviewText data-testid="movie-overview">
                      {movie.overview}
                    </OverviewText>
                  </OverviewContainer>
                </Info>
              </Container>
            )}
          </MovieContainer>
        )}
      </Div>
    </>
  );
};

export default Movie;
