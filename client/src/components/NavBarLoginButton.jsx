import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import GamerRoom from "../images/gamerroom.jpg";
import Form from 'react-bootstrap/Form';
import gaming from '../images/gaming.avif'


export let NavBarLoginButton = () => {
  // LOGIN NAV BAR
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // LOGIN
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  // SIGN UP
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  // USER INPUT
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

    const data = {
      username: email,
      password: password
    }
    const serializedData = JSON.stringify(data)
    //submit email and password to server
    fetch('/api/signUp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: serializedData
      })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    event.preventDefault();
  }


  // Send create account data to backend to be turned into a django model object
  // const signUp = () => {
    
  //   const userEmail = document.getElementByClassName("SignUpEmail").innerText;
  //   const userPassword = document.getElementByClassName("SignUpPassWord").innerText;
  //   console.log(userEmail,userPassword);

  // };
  // const signIn = () => {
  //   const userEmail = document.getElementByClassName("SignInEmail");
  //   const userPassWord = document.getElementByClassName("SignInPassWord");
  //   console.log(".");
  // };

  return (
    <div>
      {/* LOGIN NAVBAR BUTTON */}
      <Button variant="light" className="GameHubLogin" onClick={handleShow}>
        Login
      </Button>
      {/* OFF CANVAS */}
      <Offcanvas
        className="offCanvas"
        show={show}
        onHide={handleClose}
        stroll="false"
        reponsive="md"
        placement="end"
      >
        <Offcanvas.Header className="LoginCreate">
          <Offcanvas.Title>Login or Create Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Image width="365px" height="300px" src={GamerRoom} />
          <center>
            Join in on the free fun! Make an account today and start earning
            points to reach the top of the leaderboards!
          </center>
          {/* LOGIN */}
          <Button
            variant="primary"
            onClick={handleShow1}
            className="LoginButtons1"
          >
            Login
          </Button>
          {/* LOGIN OFFCANVAS */}
          <Offcanvas
            className="offCanvas"
            show={show2}
            onHide={handleClose1}
            stroll="false"
            reponsive="md"
            placement="end"
          >
            <Offcanvas.Header>
              <Offcanvas.Title className="LoginSignUp">GameHub</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Image src={gaming} width="330" length="250" />
              <Form onSubmit={handleSubmit} >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Label variant="light" htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder='password'
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={event => setPassword(event.target.value)} 
                />
                <Button className="GameHubSignUp2" type='submit'>Sign In</Button>
              </Form>
            </Offcanvas.Body>
      </Offcanvas>
          {/* SIGN UP */}
          <Button
            variant="secondary"
            onClick={handleShow2}
            className="SignUpButtons2"
          >
            Sign Up
          </Button>
          {/* Sign Up Off Canvas */}
          <Offcanvas
            className="offCanvas"
            show={show2}
            onHide={handleClose2}
            stroll="false"
            reponsive="md"
            placement="end"
          >
            <Offcanvas.Header>
              <Offcanvas.Title className="LoginSignUp">GameHub</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form onSubmit={handleSubmit} >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={email} onChange={event => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Label variant="light" htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder='password'
                  id="inputPassword7"
                  aria-describedby="passwordHelpBlock"
                  onChange={event => setPassword(event.target.value)} 
                />
                <Button className="GameHubSignUp2" type='submit'>Create Account</Button>
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
