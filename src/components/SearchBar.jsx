import { Cancel, KeyboardDoubleArrowRight, Search } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Result from "./Result";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Error from "./Error";
import { mobile } from "../responsive";

// const Container = styled.div`
//   width: 100%;
// `;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
  position: relative;
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

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultsDropDown = styled.div`
  position: absolute;
  width: 600px;
  min-height: 100px;
  max-height: 400px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 9999;
  color: black;
  margin: 10px 0 0 0;
  border: 1px solid #ccc;
  overflow-y: auto;
  border-radius: 20px;

  ${mobile({
    width: "100vw",
    zIndex: "9999",
  })}
`;

// const Loader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const ResultItems = styled.div``;

const CancelIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px 0 0;
  position: relative;
`;

const StyledCancelIcon = styled(Cancel)`
  position: sticky;
  font-size: small;
  color: grey;
`;

const ResultItem = styled.div``;

// const More = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const MoreText = styled.p`
//   margin: 10px 5px 10px 10px;
// `;

// const MoreIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const SearchBar = () => {
  //Component States
  const [query, setQuery] = useState("");
  const [dropDown, setDropDown] = useState(false);
  // const [results, setResults] = useState([]);
  const [dropDownResults, setDropDownResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  // const [resultLoading, setResultLoading] = useState(true);
  const [error, setError] = useState(false);
  // const resDataResults = useRef(null);

  //Api links
  const baseURL = "https://api.themoviedb.org";
  const endPoint = "/3/search/movie";
  const apiKey = "3685919de6d6123451bc68adcb6632df";

  //handle search icon click
  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  //handle cancel icon click
  const handleCancel = () => {
    setDropDown(false);
  };

  //handle button down
  // const handleEnterKey = (e) => {
  //   if (e.key === "Enter") {
  //     handleButtonClick();
  //   }
  // };

  useEffect(() => {
    //occurs when button is clicked
    if (buttonClicked) {
      const getMovie = async () => {
        setDropDown(false);
        setLoading(true);
        // setResultLoading(true);
        try {
          const res = await axios.get(`${baseURL}${endPoint}`, {
            params: {
              api_key: apiKey,
              query: query,
              language: "en-US",
              page: 1,
            },
          });

          // resDataResults.current = res.data.results;
          // setResults(res.data.results);
          setDropDownResults(res.data.results.slice(0, 12));
          setTimeout(() => {
            setDropDown(true);
            setLoading(false);
            // setResultLoading(false);
          }, 3000);
        } catch (error) {
          console.log(error);
          setDropDown(true);
          setLoading(false);
          setError(true);
        }
      };

      query ? getMovie() : setError(true);

      setTimeout(() => setButtonClicked(false), 2000);
    }
  }, [buttonClicked, dropDownResults, query]);

  return (
    <>
      <SearchContainer>
        <SearchInput
          placeholder="What do you want to watch?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon>
          {loading ? (
            <TailSpin height="20" width="20" color="#fff" radius="1" />
          ) : (
            <Search onClick={handleButtonClick} />
          )}
        </SearchIcon>
        {dropDown && (
          <ResultsDropDown>
            <ResultItems>
              <CancelIcon onClick={handleCancel}>
                <StyledCancelIcon />
              </CancelIcon>
              {error ? (
                <Error message="Sorry!. An error occured fetching data..." />
              ) : (
                <ResultItem>
                  {dropDownResults.map((dd, index) => (
                    <Result key={index} result={dd} />
                  ))}
                  {/* {resDataResults.current && (
                  <Link
                    to={{
                      pathname: "/searchResults",
                      state: { results: resDataResults.current },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <More>
                      <MoreText>See all results</MoreText>
                      <MoreIcon>
                        <KeyboardDoubleArrowRight />
                      </MoreIcon>
                    </More>
                  </Link>
                )} */}
                </ResultItem>
              )}
            </ResultItems>
          </ResultsDropDown>
        )}
      </SearchContainer>
    </>
  );
};

export default SearchBar;
