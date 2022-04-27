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
                <motion.div
                    className="fullscreenFill"
                    whileHover={{ zoom: 1.2 }}
                >
                    <h1>
                        Edmonton SafeWalk
                        <FontAwesomeIcon className="icon" icon={faReact} />
                        <FontAwesomeIcon className="icon" icon={faPython} />
                    </h1>
                    <div className="profile">
                        <img
                            className="right_image_project"
                            src={eswImage}
                            alt="Profile"
                        />
                    </div>
                </motion.div>
                <div className="fullscreenFill">
                    <h1>
                        Experimently
                        <FontAwesomeIcon className="icon" icon={faJava} />
                        <FontAwesomeIcon className="icon" icon={faAndroid} />
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
                        <FontAwesomeIcon className="icon" icon={faPython} />
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
                        <FontAwesomeIcon className="icon" icon={faPython} />
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
