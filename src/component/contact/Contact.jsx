import React from "react";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "../../img/ByronTungResume2022Fall.pdf";
import { Col, Row } from "react-bootstrap";

function Contact() {
  const styles = {
    backgroundLeft: { backgroundColor: "#DFDFC8", minWidth: "329.5px"},
    backgroundRight: { backgroundColor: "#b19cd9", minWidth: "329.5px"},
  };
  return (
    <Row
      id="contact"
      className="d-flex position-relative min-vh-100 w-100 p-0 m-0 flex-wrap"
    >
      <Col
        id="contact_left"
        className="position-sticky flex-grow-1 flex-shrink-0 d-flex align-items-center h-auto p-0"
        style={styles.backgroundLeft}
      >
        <div className="position-sticky flex-column d-flex justify-content-center top-0 bottom-0 align-items-center w-100 vh-100">
          <h1 className="title fw-bold">Contact</h1>
          <div
            className="d-flex flex-row position-absolute"
            style={{ bottom: "3vh" }}
          >
            <BottomNagivationBar />
          </div>
        </div>
      </Col>
      <Col
        id="contact_right"
        className="d-flex h-100 w-100 flex-grow-1 flex-shrink-0 flex-column align-items-center position-relative p-0"
        style={styles.backgroundRight}
      >
        <div className="vh-100 w-100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="d-flex flex-column align-items-center">
            <a
              href="https://www.linkedin.com/in/byron-tung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} fontSize={"6vw"} color="black" />
            </a>
            <h1 style={{fontSize:"2.5vw"}}>LinkedIn</h1>
          </div>
          <div className="d-flex flex-column align-items-center">
            <a
              href="https://github.com/byrontung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} fontSize={"6vw"} color="black" />
            </a>
            <h1 style={{fontSize:"2.5vw"}}>Github</h1>
          </div>
          <div className="d-flex flex-column align-items-center">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFile} fontSize={"6vw"} color="black" />
            </a>
            <h1 style={{fontSize:"2.5vw"}}>Resume</h1>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Contact;
