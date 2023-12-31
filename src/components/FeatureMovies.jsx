import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import Error from "./Error";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 50px;
`;
const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  position: relative;
  justify-content: space-evenly;
`;

const LoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

const FeatureMovies = () => {
  //TMDB details
  const apiKey = "3685919de6d6123451bc68adcb6632df";
  const baseURL = "https://api.themoviedb.org";
  const endPoint = "/3/movie/popular";

  //component state
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //function to get movies
    const fetchTopMovies = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseURL}${endPoint}`, {
          params: {
            api_key: apiKey,
            language: "en-US",
            page: 1,
          },
        });
        setMovies(res.data.results.slice(0, 10));

        //Timeout to wait for api request
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
        setError(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    //call function
    fetchTopMovies();
  }, []);

  return (
    <>
      <Container>
        <Title>Popular Movies</Title>
        {error ? (
          <Error message="Sorry!. An error occured fetching data..." />
        ) : (
          <CardContainer>
            {loading ? (
              <LoaderContainer>
                <TailSpin height="80" width="80" color="#9c9c9c" radius="1" />
              </LoaderContainer>
            ) : (
              movies.map((m, index) => (
                <Link
                  to={`movies/${m.id}`}
                  style={{ textDecoration: "none", color: "#1f1f1f" }}
                >
                  <Card
                    key={index}
                    poster={m.poster_path}
                    title={m.title}
                    release={m.release_date}
                    id={m.id}
                    ranking={index + 1}
                    data-testid="movie-card"
                  />
                </Link>
              ))
            )}
          </CardContainer>
        )}
      </Container>
    </>
  );
};

export default FeatureMovies;
