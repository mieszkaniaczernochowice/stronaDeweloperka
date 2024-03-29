import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import logo from "./svg/logo.svg"

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row></Row>;
  else
    return (
      <Row className="navbar">
        <Col m={10} push="m1">
          <h3>Domy Czarnochowice</h3>
          <Link to="home" className="navbaritem">
            O inwestycji
          </Link>

          <Link to="portfolio" className="navbaritem">
            Standart
          </Link>
          
          <Link to="offer" className="navbaritem">
            Lokale
          </Link>
          <Link to="gallery" className="navbaritem">
            Galeria
          </Link>
          <Link to="contact" className="navbaritem">
            Kontakt
          </Link>
          <Divider/>
        </Col>
      </Row>
    );
};

export default Nav;
