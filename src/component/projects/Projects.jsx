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
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";

function Projects() {
    const styles = {
        backgroundLeft: { backgroundColor: "#DFD4C8" },
        backgroundRight: { backgroundColor: "white" },
        colour1: {},
    };
    return (
        <Row
            id="projects"
            className="d-flex position-relative min-vh-100 w-100 p-0 m-0"
        >
            <Col
                id="projects_left"
                className="col-6 position-sticky flex-grow-1 flex-shrink-0 d-flex align-items-center h-auto p-0"
                style={styles.backgroundLeft}
            >
                <div className="position-sticky flex-column d-flex justify-content-center top-0 bottom-0 align-items-center w-100 vh-100">
                    <h1 className="title">Projects</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </Col>
            <Col
                id="projects_right"
                className="col-6 d-flex h-100 flex-grow-1 flex-shrink-0 flex-column align-items-center position-relative p-0"
                style={styles.backgroundRight}
            >
                <motion.div className="vh-100 w-100" whileHover={{ zoom: 1.2 }}>
                    <h1>Edmonton SafeWalk</h1>
                    <h1>
                        <FontAwesomeIcon className="icon" icon={faReact} />
                        <FontAwesomeIcon className="icon" icon={faPython} />
                    </h1>
                    <div>
                        <img
                            className="w-100 h-100"
                            src={eswImage}
                            alt="profile"
                        />
                    </div>
                </motion.div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center">
                    <h1>Experimently</h1>
                    <h1>
                        <FontAwesomeIcon className="icon" icon={faJava} />
                        <FontAwesomeIcon className="icon" icon={faAndroid} />
                    </h1>
                    <img className="profileImage" src={profile} alt="Profile" />
                </div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center">
                    <h1>Restaurant Order Organizer</h1>
                    <h1>
                        <FontAwesomeIcon className="icon" icon={faPython} />
                    </h1>
                    <img className="profileImage" src={profile} alt="Profile" />
                </div>
                <div className="vh-100 w-100 d-flex flex-column align-items-center">
                    <h1>PokemonEffectiveness</h1>
                    <h1>
                        <FontAwesomeIcon className="icon" icon={faPython} />
                    </h1>
                    <img className="profileImage" src={profile} alt="Profile" />
                </div>
            </Col>
        </Row>
    );
}

export default Projects;
