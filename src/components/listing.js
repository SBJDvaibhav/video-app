import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Constants } from "../config/Constants";

export default function Listing() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${
          Constants.API_BASE_URL + "movie/popular?api_key=" + Constants.API_KEY
        }`
      )
      .then((response) => {
        setMovie(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  if (!movie) return "No Movies!";

  return (
    <Container>
      <Row>
        {movie.map((item) => (
          <Col key={item.id}>
            <MovieCard
              title={item.original_title}
              image={item.poster_path}
              vote={item.vote_average}
              buttonLable="name"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
