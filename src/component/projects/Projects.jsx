import React from "react";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faPython,
    faJava,
    faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import eswImage from "../../img/esw2.png";
import "./Projects.css";

function Projects() {
    return (
        <div id="projects" className="page_about">
            <div className="left">
                <div style={{ backgroundColor: "#DFD4C8" }}>
                    <h1 className="title">Projects</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </div>
            <div className="right" style={{ backgroundColor: "white" }}>
                <div className="fullscreenFill">
                    <h1>
                        Edmonton SafeWalk
                        <FontAwesomeIcon icon={faReact} />
                        <FontAwesomeIcon icon={faPython} />
                    </h1>
                    <div className="profile">
                        <img
                            className="right_image_project"
                            src={eswImage}
                            alt="Profile"
                        />
                    </div>

                </div>
                <div className="fullscreenFill">
                    <h1>
                        Experimently
                        <FontAwesomeIcon icon={faJava} />
                        <FontAwesomeIcon icon={faAndroid} />
                    </h1>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>

                </div>
                <div className="fullscreenFill">
                    <h1>
                        Restaurant Order Organizer
                        <FontAwesomeIcon icon={faPython} />
                    </h1>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>

                </div>
                <div className="fullscreenFill">
                    <h1>
                        PokemonEffectiveness
                        <FontAwesomeIcon icon={faPython} />
                    </h1>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
