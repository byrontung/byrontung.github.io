import React from "react";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


function Contact() {
    return (
        <div id="contact" className="page_about">
            <div className="left">
                <div style={{ backgroundColor: "darkgray" }}>
                    <h1 className="title">Contact</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </div>
            <div className="right">
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <h1>LinkedIn</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faGithub} />
                    <h1>Github</h1>
                </div>
                <div>
                    <div className="profile">
                        <img
                            className="profileImage"
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h1>Email</h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;
