import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Image, Col, Card, CardGroup } from "react-bootstrap";


export const GameDetailPage = () => {
  const params = useParams().gameID;
  const [game, setGame] = useState([]);

  useEffect(() => {
    gameDetailCollect();
  }, []);

  const gameDetailCollect = () => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id: params },
      headers: {
        "X-RapidAPI-Key": "981413d213msh6c8f1ef99f1ec2ap1e383djsncb2028519a5d",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGame(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const savegame = () => {
    
  }
  
  return (
    <Container>
      <Row>
        <Col>
          <Image className="BigImage" src={game.thumbnail} />
        </Col>
        <Col className="GameDetails">
          <h5>{game.title}</h5>
          <p>Developer: {game.developer}</p>
          <p>Game Genre: {game.genre}</p>
          <p>Release Year: {game.release_date}</p>
          <div id="heart" class="button" onClick={savegame}></div>
        </Col>
      </Row>
      <Row>
        <CardGroup>
          <Card>
            <Card.Body className="GameDescription">
              <Card.Title>Game Description</Card.Title>
              <Card.Text>{game.short_description}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};
