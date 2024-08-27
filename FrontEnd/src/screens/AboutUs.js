
import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hemant from "../images/imag1.jpg";
import pushpak from "../images/imag3.png";
import harshad from "../images/imag2.jpg";

export function AboutUs() {
    return (
        <Container fluid>
            <Alert
                variant="success"
                style={{
                    textAlign: "center",
                    backgroundColor: "#888888",
                    color: "white",
                }}
            >
                <h1>About Us</h1>
            </Alert>
            <Row>
                <Col lg={6}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Vision</h3>

                    <p style={{ color: 'black', fontStyle: 'italic' }}>
                        LikeKofiee is a coffee company offering digital and offline experiences across coffee delivery and fast service .

                        {/* With the aim to make coffee delivery in easy way. */}
                    </p>
                </Col>
                
                <Col lg={6}>
                    <h3 style={{ color: 'black', fontWeight: 'bold' }}>Our History</h3>
                    <p style={{ color: 'black', fontStyle: 'italic' }}>Co-founded by Hemant Bhoir, Harshad bhilawade and Pushpak Pandharpatte in CDAC -Mumbai 2024, the company is headquartered in Kharghar, Mumbai.</p>
                </Col>
            </Row>


            <Alert
                variant="danger"
                style={{
                    textAlign: "center",
                    color: "dark blue",
                }}
            > <h1>Meet Our Team </h1>
            </Alert>

            <Row >
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={Hemant} />
                        <Card.Body>
                            <Card.Title>Hemant Suresh Bhoir</Card.Title>
                            <Card.Text>
                            PRN : 240340320042 <br />
                                PG-DAC Student, March-24 batch <br />
                                CDAC Mumbai KH
                            </Card.Text>
                            <Button variant="success"><Link to="http://www.linkedin.com/in/hemant-bhoir-804364241">LinkedIn</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>

                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={harshad} />
                        <Card.Body>
                            <Card.Title>Harshad bhilawade</Card.Title>
                            <Card.Text>
                                PRN : 240340320039 <br />
                                PG-DAC Student, March-24 batch <br />
                                CDAC Mumbai KH 
                            </Card.Text>
                            <Button variant="success"><Link to="https://www.linkedin.com/in/harshad-bhilawade-571129226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} style={{ textAlign: "center" }}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pushpak} />
                        <Card.Body>
                            <Card.Title>Pushpak Pandharpatte</Card.Title>
                            <Card.Text>
                            PRN : 240340520067 <br />
                            PG-DAC Student, March-24 batch <br />
                                CDAC Mumbai JH 
                            </Card.Text>
                            <Button variant="success"><Link to="https://www.linkedin.com/in/pushpak-pandharpatte-a75872210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

