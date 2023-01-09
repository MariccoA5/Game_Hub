import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const GenrePage = () => {
  const [params, setParams] = useState();
  const [data, setData] = useState([]);

  const { genre } = useParams()

  useEffect(() => {
    gameGenreCollect();
    setParams(genre)
  }, [params]);

  const gameGenreCollect = () => {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: { category: params},
      headers: {
        'X-RapidAPI-Key': '8eefa9cf7amsh9afa51be5f5a909p1860efjsn2f5ac5f9725b',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  return (
    <div className="HomePage">
      <h5 className="Title"> Free {params} games! </h5>
      <p className="homeListName"> Check out some of the newest free {params} games. &#9728;&#65039; </p>
        <div className="gameList">
          {data ? data.slice(0,63).map((e) => {

            return (
              
                <Link to={`/game-detail/${e.id}`}>
                  <Image className="smallImage" src={e.thumbnail} />
                </Link>
              
            );
          }) : null }
        </div>
        <footer>
          <Container className="footer">
            <Row className="footerrows">
              <Col>
              <h5>Maricco Allen</h5>
              </Col>
              <Col>
                <p>LinkedIn</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p>MariccoA5@gmail.com</p>
              </Col>
              <Col>
              <p>Resume</p>
              </Col>
            </Row>
          </Container>
        </footer>
    </div>
  );
};