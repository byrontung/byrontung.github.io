import React from "react";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

function Contact() {
    return (
        <div id="contact" className="page_about">
            <div className="left">
                <div style={{ backgroundColor: "#DFDFC8" }}>
                    <h1 className="title">Contact</h1>
                    <div className="main">
                        <BottomNagivationBar />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="contact_items">
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} fontSize={100} />
                        <h1>LinkedIn</h1>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} fontSize={100} />
                        <h1>Github</h1>
                    </div>
                    {/* <FontAwesomeIcon icon={faEnvelope} fontSize={100}/>
                    <h1>Email</h1> */}
                    <div>
                        <FontAwesomeIcon icon={faFile} fontSize={100} />
                        <h1>Resume</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;