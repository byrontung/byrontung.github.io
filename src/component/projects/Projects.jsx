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
import experimentlyLogo from "../../img/experimentlyLogo.png";
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
            >
                <div className="d-flex flex-column align-items-center info text-center">
                    <h1>Edmonton SafeWalk</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faReact} />
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <img
                        className="w-100 h-60"
                        src={eswImage}
                        alt="Edmonton SafeWalk Homepage"
                    />
                    <p className="m-2 text-center">
                        This was a CMPUT 404 project that was provided by EFCL
                        and Sisters Dialogue. This opportunity connect our group
                        with the non-profit organizations EFCL and Sisters
                        Dialogue. We developed this project using React and
                        Django. A few things that I learned was the importance
                        of communication between the client and the developers,
                        understanding Django migrations conflicts, and
                        discussing commitments through planning to better manage
                        scope creep.
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center info text-center">
                    <h1>Experimently</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faJava} />
                        <FontAwesomeIcon className="px-2" icon={faAndroid} />
                    </h1>
                    <div style={{ backgroundColor: "transparent" }}>
                        <img
                            className="profileImage"
                            src={experimentlyLogo}
                            alt="experiment logo"
                        />
                    </div>
                    <p className="m-3 text-center lh-base">
                        This was a CMPUT 301 group project that introduced
                        software development ideas such as Git, agile,
                        storyboards, etc. We used Java and Android Studios to
                        create the app. This project allowed us to set
                        deadlines with the tasks we had to finish. Learning how
                        to use Git, planning tools (such as storyboards, user
                        stories, use case diagrams, etc.), and Android
                        lifecycles.
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center info text-center">
                    <h1>Restaurant Order Organizer</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <div style={{ backgroundColor: "transparent" }}>
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <p className="m-3 text-center lh-base">
                        This was a personal project in response to
                        higher-than-normal restaurant orders during big
                        holidays. During these busy times, take-out orders would
                        keep flooding in to the point where the chefs could not
                        follow which dish had already been done. The goal was to
                        scan multiple orders and organize the specific dishes in
                        an shortened list for the chefs to easier see what was
                        needed. This would result in take-out orders to come in
                        waves, which was easier to inform waiting customers how
                        long their order would take.
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center info text-center">
                    <h1>PokemonEffectiveness</h1>
                    <h1>
                        <FontAwesomeIcon className="px-2" icon={faPython} />
                    </h1>
                    <div style={{ backgroundColor: "transparent" }}>
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <p className="m-3 text-center lh-base">
                        This project was to apply knowledge I learned from the
                        Python library called Pandas. I used dataframes to
                        search for the specific Pokemon entered, then took the
                        information from their type and used another dataframe
                        to find the type that was most effective to the Pokemon
                        searched.
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default Projects;
