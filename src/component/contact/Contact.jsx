import React from "react";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "../../img/ByronTungResume2022Fall.pdf";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";

function Contact() {
    const styles = {
        backgroundLeft: { backgroundColor: "#DFDFC8" },
        backgroundRight: { backgroundColor: "#b19cd9" },
    };
    return (
        <Row
            id="contact"
            className="d-flex position-relative min-vh-100 w-100 p-0 m-0"
        >
            <Col
                id="contact_left"
                className="position-sticky flex-grow-1 flex-shrink-0 d-flex align-items-center h-auto p-0"
                style={styles.backgroundLeft}
            >
                <div className="position-sticky flex-column d-flex justify-content-center top-0 bottom-0 align-items-center w-100 vh-100">
                    <h1 className="title">Contact</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </Col>
            <Col
                id="contact_right"
                className="d-flex h-100 flex-grow-1 flex-shrink-0 flex-column align-items-center position-relative p-0"
                style={styles.backgroundRight}
            >
                <div className="vh-100 w-100 d-flex flex-row justify-content-evenly align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <a
                            href="https://www.linkedin.com/in/byron-tung/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                fontSize={100}
                                color="black"
                            />
                        </a>
                        <h1>LinkedIn</h1>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <a
                            href="https://github.com/byrontung"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                fontSize={100}
                                color="black"
                            />
                        </a>
                        <h1>Github</h1>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFile}
                                fontSize={100}
                                color="black"
                            />
                        </a>
                        <h1>Resume</h1>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Contact;
