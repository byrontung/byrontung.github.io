import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Logo from "./component/logo/Logo";
import BottomNagivationBar from "./component/bottomNavigationbar/BottomNagivationBar";
import About from "./component/about/About";
import { motion } from "framer-motion";
import Helmet from "react-helmet";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";
import { Container } from "react-bootstrap";

function App() {
    return (
        <Container fluid className="p-0">
            {/* This is causing: react_devtools_backend.js:3973 Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. */}
            <Helmet>
                <title>Byron Tung</title>
            </Helmet>
            <Welcome />
            <About />
            <Projects />
            {/* <Contact /> */}
        </Container>
    );
}

export default App;
