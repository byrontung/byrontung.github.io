import React from "react";
import "./BottomNagivationBar.css";
import { motion } from "framer-motion";

function BottomNagivationBar() {
    return (
        <>
            <h3
                className="option"
                onClick={() =>
                    document
                        .getElementById("welcome")
                        .scrollIntoView({ behavior: "smooth" })
                }
            >
                Home
            </h3>
            <h3>|</h3>
            <h3
                className="option"
                onClick={() =>
                    document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" })
                }
            >
                About
            </h3>
            <h3>|</h3>
            <h3
                className="option"
                onClick={() =>
                    document
                        .getElementById("projects")
                        .scrollIntoView({ behavior: "smooth" })
                }
            >
                Project
            </h3>
            <h3>|</h3>
            <h3
                className="option"
                onClick={() =>
                    document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                }
            >
                Contact
            </h3>
        </>
    );
}

export default BottomNagivationBar;
