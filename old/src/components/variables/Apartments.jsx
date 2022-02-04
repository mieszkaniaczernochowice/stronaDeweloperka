import "materialize-css";
import React, { Component, useEffect } from "react";
import {
    Button,
    Col,
    Divider,
    Row,
    Slider,
    Slide,
    Caption,
    Modal,
    Table,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";

import planparter1 from "../svg/planparter1.svg";
import planparter2 from "../svg/planparter2.svg";
import planparter3 from "../svg/planparter3.svg";
import planpietro1a from "../svg/planpietro1a.svg";
import planpietro1b from "../svg/planpietro1b.svg";
import carpark from "../svg/carpark.svg"
import pow from "../svg/52m.svg"
import taras from "../svg/taras.svg"
import pokoje3 from "../svg/pokoje3.svg"
import arrow from "../svg/arrow.svg"
import parter3d from "../img/parter3d.webp"


const ListaWzor = [

    {
        name: "Lokal nr 1",
        size: "28 m2",
        location: '2 piętro',
        status: <Button className="green" waves="green">
            Dostępne
</Button>,
        plan: (<Modal
            className="modalid"
            actions={[
                <Button flat modal="close" node="button" waves="green">
                    Zamknij
            </Button>,
            ]}
            className="modalInfo"
            bottomSheet={false}
            fixedFooter={false}
            header={<h3 className="center">Lokal M1</h3>}
            id="M1"
            open={false}
            options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
            }}
            trigger={
                <Button className="red" node="button" small>
                    Rzut
            </Button>
            }
        >
            <Row>
                <Divider />
                <Row />
                <Row />
                <Col s={12} m={6} push="m" l={4}>
                    <img className="center" src={planparter1} alt="" width="100%" />
                    <h5 className="center">Rzut 0</h5>
                </Col>
                <Col s={12} m={6} push="m" l={4}>
                    <img className="center" src={planparter2} alt="" width="100%" />
                    <h5 className="center">Rzut 1</h5>
                </Col>
                <Col className="" s={12} m={4} l={4} push="m">
                    <h5>
                        Zestawienie pomieszczeń
                        <Divider/>
                <br /><br />
                     <Table>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Sypialnia</td>
                             <td>20m2</td>
                         </tr>
                         <tr>
                             <td>Razem</td>
                             <td>20m2</td>
                         </tr>
                     </Table>
                    </h5>
                </Col>
            </Row>
        </Modal>
        ),
        info: (<Modal
            className="modalid"
            actions={[
                <Button flat modal="close" node="button" waves="green">
                    Zamknij
            </Button>,
            ]}
            className='modalInfo'
            bottomSheet={false}
            fixedFooter={false}
            header={<h3 className="center">Lokal M1</h3>}
            id="infoM1"
            open={false}
            options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
            }}
            trigger={
                <Button className="red" node="button" small>
                    Informacje
            </Button>
            }
        >
            <Row>
                <Row />
                <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className=""
                >
                    <Row>
                        <Col s={12} m={6}>
                            <Row>
                                <Col m={10} push="m1">
                                    <div className="valign-wrapper">
                                        <div className="left-align">
                                            <h3>
                                                Opis Lokalu
                      <Divider />
                                            </h3>
                    PageMaker including versions of Lorem Ipsum. Why do we use
                    it? It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </div>
                                    </div>
                                    <Row />
                                    <Col s={3}>
                                        <img className="red" src={pow} width="100%" /> powierzchnia</Col><Col s={3}>
                                        <img className="red" src={carpark} width="100%" /> dostępne parkingowe</Col><Col s={3}>
                                        <img className="red" src={taras} width="100%" /> taras z wyjściem na ogród</Col><Col s={3}>
                                        <img className="red" src={pokoje3} width="100%" /> 3 pokoje plus łazienka i korytarz</Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col s={12} m={6}>
                            {" "}
                            <img
                                src={parter3d}
                                width="100%"
                            /><Button className="red right" node="button" large >
                                Rzut
          </Button>
                        </Col>
                    </Row>
                </div>
                <img src={arrow} width="100%" />
                <Row />


                <div
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="hoverable z-depth-5 white"
                >
                    <Row>
                        <Col s={12} m={12}>
                            <div className="valign-wrapper">
                                <div className="center-align">
                                    <h3>
                                        Interaktywny Model 3D / Przykładowe aranżacje wnętrz
                  <Divider />
                                    </h3>
                PageMaker including versions of Lorem Ipsum. Why do we use it?
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
                            </div>
                        </Col>
                        <Row />
                        <Row />
                        <Col s={12} m={6} push='m3'>
                            <h5>Rzut Parteru</h5>
                            <Iframe
                                url="https://p3d.in/KAWGK"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            />
                        </Col>{" "}

                        <Col s={12}>
                            <div className="center-align">
                                <h3>
                                    Możliwość zakupu lokalu wraz z wykończeniem
                <Divider />
                                </h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus
              <br />
                                <Row />
                                <Button className="z-depth-2  " node="a" href="gallery">
                                    Przejdz do galerii
              </Button>
                            </div>
                        </Col>
                        <Row />
                        <Col s={12} m={12}>
                            <Iframe
                                url="https://www.youtube.com/embed/-Lrw0ZWwC-o"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            />
                        </Col>
                        <Col s={12} m={12}>
                            <Iframe
                                url="https://www.youtube.com/embed/26PVBGNEOO4"
                                width="100%"
                                height="600px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            />
                        </Col>
                        <Col s={12}>
                            <Row />
                            <Button className="z-depth-2  " large node="a" href="contact">
                                Zarazerwuj lokal
            </Button>
                            <Row />
                        </Col>
                    </Row>
                </div>
                <Row />
            </Row>
        </Modal>
        ),


    }
];

export default ListaWzor;