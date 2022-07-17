import {
    faAndroid,
    faJava,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import eswImage from "../../img/esw2.png";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import "./Projects.css";
import { Col, Row } from "react-bootstrap";

function Projects() {
    const styles = {
        backgroundLeft: { backgroundColor: "#DFD4C8" },
        backgroundRight: { backgroundColor: "white" },
    };
    return (
        <Row
            id="projects"
            className="d-flex position-relative min-vh-100 w-100 p-0 m-0"
        >
            <Col
                id="projects_left"
                className="position-sticky flex-grow-1 flex-shrink-0 d-flex align-items-center h-auto p-0"
                style={styles.backgroundLeft}
            >
                <div className="position-sticky flex-column d-flex justify-content-center top-0 bottom-0 align-items-center w-100 vh-100">
                    <h1 className="title fw-bold">Projects</h1>
                    <div
                        className="d-flex flex-row position-absolute"
                        style={{ bottom: "3vh" }}
                    >
                        <BottomNagivationBar />
                    </div>
                </div>
            </Col>
            <Col
                id="projects_right"
                className="d-flex h-100 flex-grow-1 flex-shrink-0 flex-column align-items-center position-relative p-0"
                // style={styles.backgroundRight}
            >
                <div className="vh-100 w-100v d-flex flex-column align-items-center info">
                    <h1>Edmonton SafeWalk</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faReact} />
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <div>
                        <img
                            className="w-100 h-100"
                            src={eswImage}
                            alt="Edmonton SafeWalk Homepage"
                        />
                    </div>
                    <p>
                        This was a CMPUT 404 project that was provided by EFCL
                        and Sisters Dialogue. This opportunity connect our group
                        with the non-profit organizations EFCL and Sisters
                        Dialogue.
                    </p>
                </div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center info">
                    <h1>Experimently</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faJava} />
                        <FontAwesomeIcon className="px-2" icon={faAndroid} />
                    </h1>
                    <div style={{backgroundColor:"transparent"}}>
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Saepe debitis quod facilis ducimus culpa iste
                        quaerat nobis ratione sit, quidem earum vel repellendus
                        aliquam fugit? Obcaecati alias et consequuntur
                        consequatur?
                    </p>
                </div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center info">
                    <h1>Restaurant Order Organizer</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <div style={{backgroundColor:"transparent"}}>
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Saepe debitis quod facilis ducimus culpa iste
                        quaerat nobis ratione sit, quidem earum vel repellendus
                        aliquam fugit? Obcaecati alias et consequuntur
                        consequatur?
                    </p>
                </div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center info">
                    <h1>PokemonEffectiveness</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <div style={{backgroundColor:"transparent"}}>
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Saepe debitis quod facilis ducimus culpa iste
                        quaerat nobis ratione sit, quidem earum vel repellendus
                        aliquam fugit? Obcaecati alias et consequuntur
                        consequatur?
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default Projects;
