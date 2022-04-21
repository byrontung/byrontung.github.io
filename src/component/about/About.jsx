import React from "react";
import "./About.css";

function About() {
    return (
        <div className="row page">
            <div className="backgroundColour left">
                <h1>About</h1>
            </div>
            <div className="backgroundColour right">
                <h1 className="mainText">Hello! My name is Byron Tung</h1>
                <h1 className="mainText">Welcome to my website!</h1>
                <h1 className="mainText">
                    I am a student at the University of Alberta pursing a
                    Specialized Computer Science Degree.
                </h1>
                <h1 className="mainText">
                    In my spare time, I play and coach badminton. I have played
                    it for 12+ years and enjoy giving back to the communities
                    that want my help. Since I was once in their shoes, I
                    believe that having a mentor and a friend working towards a
                    common goal is a special connection that can be build though
                    sports.
                </h1>
            </div>
        </div>
    );
}

export default About;
