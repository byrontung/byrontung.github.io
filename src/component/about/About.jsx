import React, { useEffect, useState } from "react";
import "./About.css";
import profile from "../../img/profile.jpg";
import BottomNagivationBar from "../bottomNavigationbar/BottomNagivationBar";

function About() {
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        const height = window.innerHeight;
        if (position >= height) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    return (
        <>
            <div id="about" className="outer_div">
                <div className="scroll-content-left">
                    <div>
                        <h1 className="title">Welcome</h1>
                        <div className="main">
                            <BottomNagivationBar />
                        </div>
                    </div>
                </div>
                <div className="scroll-content-right">
                    <div>
                        <h1 className="">Welcome to my website!</h1>
                        <h1 className="">
                            Hello! My name is Byron Tung and I am student at the
                            University of Alberta pursing a Specialized Computer
                            Science Degree.
                        </h1>
                        <h1 className="">
                            In my spare time, I play and coach badminton. I have
                            played badminton for 12+ years and enjoy giving back
                            to the community. Since I was once in their shoes, I
                            believe that having a mentor and a friend working
                            towards a common goal is a special connection that
                            can be built though sports.
                        </h1>
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum nemo numquam impedit placeat aut at
                            cumque pariatur sint illo eius minus veniam, vitae
                            voluptates ut eum necessitatibus nostrum molestiae
                            illum.
                        </h1>
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum nemo numquam impedit placeat aut at
                            cumque pariatur sint illo eius minus veniam, vitae
                            voluptates ut eum necessitatibus nostrum molestiae
                            illum.
                        </h1>
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum nemo numquam impedit placeat aut at
                            cumque pariatur sint illo eius minus veniam, vitae
                            voluptates ut eum necessitatibus nostrum molestiae
                            illum.
                        </h1>
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum nemo numquam impedit placeat aut at
                            cumque pariatur sint illo eius minus veniam, vitae
                            voluptates ut eum necessitatibus nostrum molestiae
                            illum.
                        </h1>
                    </div>
                </div>
            </div>
        </>
        // {/* <div className="main">
        //         <BottomNagivationBar />
        //     </div> */}
        // {/* <div className="backgroundColour right">
        //     <div className="profile">
        //         <img className="profileImage" src={profile} alt="Profile" />
        //     </div>
        //     <h1 className="mainText">Welcome to my website!</h1>
        //     <h1 className="mainText">
        //         Hello! My name is Byron Tung and I am student at the
        //         University of Alberta pursing a Specialized Computer Science
        //         Degree.
        //     </h1>
        //     <h1 className="mainText">
        //         In my spare time, I play and coach badminton. I have played
        //         badminton for 12+ years and enjoy giving back to the
        //         community. Since I was once in their shoes, I believe that
        //         having a mentor and a friend working towards a common goal
        //         is a special connection that can be built though sports.
        //     </h1>
        //     <h1>
        //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //         Voluptatum nemo numquam impedit placeat aut at cumque
        //         pariatur sint illo eius minus veniam, vitae voluptates ut
        //         eum necessitatibus nostrum molestiae illum.
        //     </h1>
        // </div> */}
    );
}

export default About;
