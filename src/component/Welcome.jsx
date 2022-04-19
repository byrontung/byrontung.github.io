import React from "react";
import "./Welcome.css";
import { motion } from "framer-motion";

function Welcome() {
    return (
        <motion.div
            className="disappear"
            // id="logo"
            initial={{opacity: 1 }}
            animate={{ opacity: 0  }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 6,
            }}
        >
            <svg
                id="logo"
                width="642"
                height="115"
                viewBox="0 0 642 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M125.44 3.68H150.56C150.453 4 150.453 4.42667 150.56 4.96C150.667 5.49334 150.613 6.13334 150.4 6.88C150.293 7.52 150.08 8.10667 149.76 8.64C149.12 10.0267 147.733 10.8267 145.6 11.04L142.72 11.36L110.08 112H100.48L75.68 34.08L48.64 112H39.52L9.44001 11.68L0.800011 10.72C0.373344 6.02667 1.81334 3.68 5.12001 3.68H34.24C34.24 3.68 34.24 4.10667 34.24 4.96C34.24 7.84 33.4933 9.6 32 10.24C31.2533 10.6667 30.3467 10.9333 29.28 11.04L22.4 11.36L45.6 95.36L72.96 13.44H82.4L106.72 95.84L132.8 11.68L120.96 10.72C120.533 6.02667 122.027 3.68 125.44 3.68Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M220.05 69.92H169.81C169.703 70.9867 169.65 72.64 169.65 74.88C169.65 83.9467 171.57 91.3067 175.41 96.96C179.25 102.507 185.223 105.28 193.33 105.28C201.437 105.28 209.17 102.4 216.53 96.64C217.81 97.7067 218.45 99.04 218.45 100.64C218.45 103.627 215.517 106.667 209.65 109.76C203.89 112.853 197.383 114.4 190.13 114.4C180.21 114.4 172.263 111.147 166.29 104.64C160.423 98.1333 157.49 88.2133 157.49 74.88C157.49 61.5467 161.01 50.9867 168.05 43.2C175.09 35.3067 183.41 31.36 193.01 31.36C202.61 31.36 209.543 34.4 213.81 40.48C218.077 46.56 220.157 53.8133 220.05 62.24V69.92ZM208.37 62.72C208.37 55.5733 206.983 49.92 204.21 45.76C201.437 41.4933 197.383 39.36 192.05 39.36C186.823 39.36 182.343 41.44 178.61 45.6C174.877 49.76 172.263 55.4667 170.77 62.72H208.37Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M262.44 112H232.36V110.72C232.36 107.307 234.067 105.44 237.48 105.12L244.36 104.8V10.88L236.04 10.08C233.48 9.76 232.2 7.52 232.2 3.36L255.4 0.320007V104.48L266.76 105.44C267.187 109.813 265.747 112 262.44 112Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M314.781 31.36C321.608 31.36 326.995 32.7467 330.941 35.52C334.995 38.2933 337.021 41.9733 337.021 46.56C337.021 52.4267 334.035 55.2533 328.061 55.04C327.955 51.0933 326.568 47.6267 323.901 44.64C321.341 41.5467 317.448 40 312.221 40C304.648 40 298.835 43.1467 294.781 49.44C290.835 55.7333 288.861 63.68 288.861 73.28C288.861 81.7067 290.515 88.96 293.821 95.04C297.661 101.76 304.275 105.12 313.661 105.12C321.341 105.12 328.648 102.293 335.581 96.64C336.968 97.6 337.661 98.88 337.661 100.48C337.661 103.68 334.621 106.827 328.541 109.92C322.461 112.907 315.955 114.4 309.021 114.4C298.888 114.4 291.048 110.88 285.501 103.84C280.061 96.8 277.235 87.2 277.021 75.04C276.808 62.7733 280.061 52.4267 286.781 44C293.501 35.5733 302.835 31.36 314.781 31.36Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M383.925 39.68C376.672 39.68 371.072 42.8267 367.125 49.12C363.178 55.4133 361.205 63.4667 361.205 73.28C361.205 82.9867 363.125 90.9333 366.965 97.12C370.805 103.2 376.352 106.24 383.605 106.24C390.858 106.133 396.458 103.04 400.405 96.96C404.352 90.88 406.325 83.04 406.325 73.44C406.325 63.7333 404.405 55.68 400.565 49.28C396.832 42.7733 391.285 39.5733 383.925 39.68ZM384.885 31.36C392.992 31.36 400.298 33.92 406.805 39.04C410.218 41.8133 412.938 45.8667 414.965 51.2C417.098 56.5333 418.165 62.9333 418.165 70.4C418.378 83.6267 415.285 94.2933 408.885 102.4C402.485 110.4 393.845 114.4 382.965 114.4C372.085 114.4 363.818 110.987 358.165 104.16C352.512 97.3333 349.578 87.4667 349.365 74.56C349.258 61.6533 352.405 51.2533 358.805 43.36C365.312 35.36 374.005 31.36 384.885 31.36Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M564.855 112H534.615V110.72C534.615 108.16 535.362 106.56 536.855 105.92C537.602 105.493 538.508 105.227 539.575 105.12L546.135 104.8V64.8C546.135 49.2267 539.842 41.44 527.255 41.44C522.882 41.44 519.042 42.4 515.735 44.32C512.428 46.1333 508.802 48.8533 504.855 52.48C505.815 55.4667 506.295 59.2533 506.295 63.84V104.48L518.295 105.44C518.722 109.813 517.282 112 513.975 112H483.575V110.72C483.575 108.16 484.322 106.56 485.815 105.92C486.562 105.493 487.468 105.227 488.535 105.12L495.095 104.8V64.8C495.095 57.12 493.388 51.3067 489.975 47.36C486.668 43.4133 482.028 41.44 476.055 41.44C471.895 41.44 468.215 42.2933 465.015 44C461.815 45.7067 458.402 48.2133 454.775 51.52V104.48L466.935 105.44C467.362 109.813 465.868 112 462.455 112H432.055V110.72C432.055 108.16 432.802 106.56 434.295 105.92C435.042 105.493 435.948 105.227 437.015 105.12L443.735 104.8V41.28L436.695 41.12C433.282 41.12 431.575 38.8267 431.575 34.24L452.215 31.52L454.135 42.72H454.615C461.762 35.1467 469.762 31.36 478.615 31.36C483.415 31.36 488.002 32.5333 492.375 34.88C496.748 37.2267 500.108 40.9067 502.455 45.92C506.188 41.5467 510.135 38.0267 514.295 35.36C518.562 32.6933 524.055 31.36 530.775 31.36C537.495 31.36 543.575 33.9733 549.015 39.2C554.455 44.4267 557.175 52.64 557.175 63.84V104.48L569.335 105.44C569.762 109.813 568.268 112 564.855 112Z"
                    stroke="white"
                    strokeWidth="2"
                />
                <path
                    d="M641.925 69.92H591.685C591.578 70.9867 591.525 72.64 591.525 74.88C591.525 83.9467 593.445 91.3067 597.285 96.96C601.125 102.507 607.098 105.28 615.205 105.28C623.312 105.28 631.045 102.4 638.405 96.64C639.685 97.7067 640.325 99.04 640.325 100.64C640.325 103.627 637.392 106.667 631.525 109.76C625.765 112.853 619.258 114.4 612.005 114.4C602.085 114.4 594.138 111.147 588.165 104.64C582.298 98.1333 579.365 88.2133 579.365 74.88C579.365 61.5467 582.885 50.9867 589.925 43.2C596.965 35.3067 605.285 31.36 614.885 31.36C624.485 31.36 631.418 34.4 635.685 40.48C639.952 46.56 642.032 53.8133 641.925 62.24V69.92ZM630.245 62.72C630.245 55.5733 628.858 49.92 626.085 45.76C623.312 41.4933 619.258 39.36 613.925 39.36C608.698 39.36 604.218 41.44 600.485 45.6C596.752 49.76 594.138 55.4667 592.645 62.72H630.245Z"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        </motion.div>

        // <div style={{ backgroundColor: "black" }}>
        //     
        // </div>
    );
}

export default Welcome;