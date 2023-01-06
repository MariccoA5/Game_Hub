import React from "react";

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomePage = ( {data} ) => {


  return (
    <div className="HomePage">
      <h5 className="Title"> Home Page </h5>
      <p className="homeListName"> Check out some of the hottest newest games under the sun. &#9728;&#65039; </p>
        <div className="gameList">
          {data ? data.map((e) => {

            return (
              
                <Link to={`/game-detail/${e.id}`}>
                  <Image className="smallImage" src={e.background_image} />
                </Link>
              
            );
          }) : null }
        </div>
        <footer>
          <Container>
            <Row>
              <Col>
              <p>im here1</p>
              </Col>
              <Col>
              <p>im here2</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <p>im here3</p>
              </Col>
              <Col>
              <p>im her4</p>
              </Col>
            </Row>
          </Container>
        </footer>
    </div>
  );
};
