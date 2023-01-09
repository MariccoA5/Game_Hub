import React from "react";

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomePage = ( {data} ) => {


  return (
    <div className="HomePage">
      <h5 className="Title"> Home Page </h5>
      <p className="homeListName"> Check out some of the hottest newest games under the sun. &#9728;&#65039; </p>
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
