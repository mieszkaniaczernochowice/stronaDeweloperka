import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Modal,
  Slide,
  Caption,
  Table,
  Card,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import Lokale from "./Lokale";
import ogrod from "./svg/ogrod.svg";
import autostrada from "./svg/autostrada.svg";
import karkowwieliczka from "./svg/krakowwieliczka.svg";
import silence from "./svg/silence.svg";
import windows from "./svg/windows.svg";
import layout from "./svg/layout.svg";
import arrow from "./svg/arrow.svg";
import oddanie from "./svg/oddanie.svg";
import budowa from "./svg/budowa.svg";
import sprzedaz from "./svg/sprzedaz.svg";
import bg from "./img/9.png";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");
  let color = "red";

  return (
    <Row className="">
      <Row className="home1">
        <Col className="center"s={4} m={2}>
          <Card className="red homeIcons1">
            <div className="white-text">
              <img src={sprzedaz} width="100%" />
              Rozpoczęcie sprzedazy 
              <br/>
              2 kwartal 21'
            </div>
          </Card>
        </Col>
        <Col className="center"s={4} m={2} push="m3">
          <Card className=" red homeIcons1">
            <div className="white-text">
              <img  src={budowa} width="100%" />
              Rozpoczęcie Budowy 
              <br/>
              2 kwartal 21'
            </div>
          </Card>
        </Col>
        <Col s={4} m={2} push="m6">
          <Card className=" red homeIcons1">
            <div className="white-text">
              <img src={oddanie} width="100%" />
             Planowane Oddanie 
              <br/>
              2 kwartal 21'
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="home11">
        <div data-aos="fade-right" data-aos-duration="2000">
          <Card className="">
            Domy Czarnochowice
            <Divider />
            <Row>
              <Col m={12} s={12}>
                <div>
                  Nasze domy szeregowe wyróżniają się nowoczesną architekturą
                  oraz wysokim standardem. W realizacjach Real Invest szczególną
                  uwagę przywiązujemy do przeszkleń, dzięki czemu oferowane
                  przez nas wnętrza są słoneczne, a sama bryła budynku sprawia
                  wrażenie lżejszej. Damy również o estetykę i funkcjonalność
                  zagospodarowania części wspólnych naszych osiedli, dzięki
                  czemu są przestrzeniami przyjaznymi dla mieszkańców
                  niezależnie od wieku.
                </div>
                <Row />
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <img src={arrow} width="100%" />
      <Row /> <Row /> <Row /> <Row /> <Row />
      <Row>
        <Col s={12}>
          <div className="video-wrapper z-depth-5 hide-on-small-only">
            <ReactPlayer
              // className="react-player"
              url="https://youtu.be/e2pJmZU8rdA"
              playing={true}
              muted={true}
              width="100%"
              height="750px"
              loop={true}
            />
          </div>
          <div className="video-wrapper z-depth-5 hide-on-med-and-up">
            <ReactPlayer
              // className="react-player"
              url="hhttps://www.youtube.com/embed/jvhw7ms6fXI "
              playing={true}
              muted={true}
              width="100%"
              height="500px"
              loop={true}
            />
          </div>
        </Col>
      </Row>
      <Row />
      <Row />
      <Row />
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-6"
        >
          <Card>
            <h5>
              Domy Czarnochowice
              <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  Nasze domy szeregowe wyróżniają się nowoczesną architekturą
                  oraz wysokim standardem. W realizacjach Real Invest szczególną
                  uwagę przywiązujemy do przeszkleń, dzięki czemu oferowane
                  przez nas wnętrza są słoneczne, a sama bryła budynku sprawia
                  wrażenie lżejszej. Damy również o estetykę i funkcjonalność
                  zagospodarowania części wspólnych naszych osiedli, dzięki
                  czemu są przestrzeniami przyjaznymi dla mieszkańców
                  niezależnie od wieku.
                </div>
                <Row />
                <Row>
                  <Col s={4}>
                    <img src={autostrada} width="60%" />
                    <br />5 minut od autostrady
                  </Col>
                  <Col s={4}>
                    <img src={karkowwieliczka} width="60%" />
                    <br />
                    Na granicy Krakowa i Wieliczki
                  </Col>
                  <Col s={4}>
                    <img src={layout} width="60%" />
                    <br />
                    Praktyczny i adaptowalny uklad przestrzenny
                  </Col>
                  <Col s={4}>
                    <img src={silence} width="60%" />
                    <br />
                    Cicha i spokojna okolica
                  </Col>
                  <Col s={4}>
                    <img src={ogrod} width="60%" />
                    <br />
                    Kazdy lokal z przydzielonym, ogrodzonym ogrodkiem
                  </Col>
                  <Col s={4}>
                    <img src={windows} width="60%" />
                    <br />
                    Duze przeszklenia
                  </Col>
                </Row>
              </Col>

              <Col m={6} s={12}>
                <Iframe
                  url="https://p3d.in/RNOMQ"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname "
                  display="initial"
                  position="relative"
                />
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card className="z-depth-5">
            <h5>
              Lokalizacja <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  Oferowane przez Real Invest nowe segmenty usytuowane są w
                  spokojnej, cichej okolicy. Znajdują się one z dala od centrum
                  miasta, do którego mieszkańcy mają jednak ułatwiony dostęp
                  dzięki kursującym tutaj miejskim autobusom i tramwajom.
                  Systematycznie wzbogacamy rynek pierwotny o kolejne domy
                  zaprojektowane według najnowocześniejszych technologii. W
                  wielu z nich zamontowano nowoczesne systemy bezpieczeństwa.
                  Dzięki łączności Wi-Fi można sterować z dowolnego miejsca m.
                  in. ogrzewaniem, oświetleniem czy działaniem systemu
                  alarmowego.
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Col m={2}></Col>
                    <Col m={8}>
                      <div>
                        <h5>
                          <li>Centrum Wieliczki - 3,5km</li>
                          <br />
                          <li>Stacja Kolejowa Kokotow - 1km</li>
                          <br />
                          <li>Rynek Glowny - 13,7km</li>
                          <br />
                          <li>Autostrada - 1km</li>
                          <br />
                          <li>Paczkomat Inpost - 500m</li>
                          <br />
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="left-align">
                  Dziekilokalizacji obiektow przysli wlasciciele nieruchomosci
                  moga liczyc na:
                  <br />
                  Obnizone koszta zycia w stosunku do Krakowa
                  <br />
                  Swietny dostep do aotostrady i stacji kolejowej
                </div>
              </Col>
              <Col m={6} s={12}>
                <Iframe
                  url="https://maps.google.com/maps?q=Czarnochowice%2072,%2032-020%20Czarnochowice&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
    </Row>
  );
};

export default Home;
