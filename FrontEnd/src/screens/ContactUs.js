import React from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";

export function ContactUs() {
  return (
    <>
      <Container>
        <Alert>
          <h2 className="main-title text-center">CONTACT US</h2>
        </Alert>

        <Table className="mt-4">
          <Row>
            <Col md={12}>
              <div
                className="p-5 contactus"
                style={{ textAlign: "center" }}
                id="contactus"
              >
                <div className="contact-info mb-5">
                  <p>
                    Address: <br />
                    <b>
                      "LikeKofiee", Coffee Shop , Team-15 Building, Kharghar
                      Batch March-24, Zoom Meeting Id: 813 3065 0016 password:
                      12345
                    </b>
                  </p>
                  <p>
                    Website: <b>www.LikeKofiee.com</b>
                  </p>
                  <p>Email: hemantbhoir101@gmail.com</p>
                  <p>Contact:+91 9921975488 / 7757978539 / 9921626877</p> <hr />
                </div>
              </div>
            </Col>
          </Row>
        </Table>
      </Container>
    </>
  );
}
