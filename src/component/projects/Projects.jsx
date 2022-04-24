import React from "react";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faPython, faJava, faAndroid, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return (
        <div id="projects" className="page_about">
            <div className="left">
                <div style={{ backgroundColor: "#D2D4C8" }}>
                    <h1 className="title">Projects</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </div>
            <div className="right" style={{ backgroundColor: "white" }}>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faReact} />
                    <FontAwesomeIcon icon={faPython} />
                    <h1>Edmonton SafeWalk</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faJava} />
                    <FontAwesomeIcon icon={faAndroid} />
                    <h1>Experimently</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faPython} />
                    <h1>Restaurant Order Organizer</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faPython} />                    
                    <h1>PokemonEffectiveness</h1>
                </div>
            </div>
        </div>
    );
}

export default Projects;
