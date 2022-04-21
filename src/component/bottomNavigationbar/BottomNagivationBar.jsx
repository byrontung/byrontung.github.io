import React from "react";
import "./BottomNagivationBar.css";
import { motion } from "framer-motion";

function BottomNagivationBar() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 4,
            }}
        >
            <div className="main">
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
                <h3 className="option">Project</h3>
                <h3>|</h3>
                <h3 className="option">Contact</h3>
            </div>
        </motion.div>
    );
}

export default BottomNagivationBar;
