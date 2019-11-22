import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Media } from 'react-bootstrap';
import axios from 'axios';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [movieList, setMovieList] = useState([{ title: '', poster_path: '' }])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURI(searchQuery)}&include_adult=false&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

    axios.get(url)
      .then(res => setMovieList(res.data.results));
  }
  return (

    <Container>
      <Row>
        <Col>
          <h1>Movies</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={(event) => { handleSubmit(event) }}>
            <Form.Group controlId="movieSearchQuery">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" onChange={handleSearchChange} value={searchQuery} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>

          {movieList.map(movie =>
            <Media style={{ padding: '5px 0 5px 0' }}>
              <img
                width={64}
                height={64}
                className="mr-3"
                src={(movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : '#')}
                alt=''
              />
              <Media.Body>
                <h5>{movie.title}</h5>
              </Media.Body>
            </Media>)}
        </Col>
      </Row>
    </Container>
  );
}

export default Movies