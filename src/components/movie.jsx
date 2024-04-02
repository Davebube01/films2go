import { useState, useEffect } from "react";
import filmsIcon from "../assets/films2go.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import ErrorBoundary from "./ErrorBoundary";

import MovieCard from "./movieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=ecb968fa";


export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState(null)

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

   
    setMovies(data.Search);
  }

  // For the card div on hover

  useEffect(() => {
    searchMovie("batman");
  }, []);

  return (
    <Container>
      <div className="back">
        <Navbar expand="lg">
          <header id="header">
            <Navbar.Brand href="#home">
              <img src={filmsIcon} alt="" width={100} height={100} />
            </Navbar.Brand>
          </header>
        </Navbar>

        <section className="film-body">
          <div id="film">
            {/* <img src={filmsLogo} alt="" width={500}/> */}
            <h1 className="display-1">Films2Go</h1>
          </div>
          <p>Search for you favourite movies</p>

          <div className="search">
            <input
              type="text"
              placeholder="Search for movie"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                alt="search"
                onClick={() => searchMovie(searchTerm)}
              />
            </i>
          </div>

          
          <Container>
            {movies?.length > 0 ? (
              <Row>
                  {movies.map((movie) => {
                    return (
                      <Col sm={6} md={6} lg={4} key={movie.imdbID}>
                        <MovieCard movie={movie} />;
                      </Col>
                    );
                  })}
              </Row>
            ) : (
              <div className="empty">
                <h2>No movies found here!!!</h2>
              </div>
            )}
          </Container>
        </section>
      </div>
    </Container>
  );
}
