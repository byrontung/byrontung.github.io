import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Logo from "./component/logo/Logo";
import BottomNagivationBar from "./component/bottomNavigationbar/BottomNagivationBar";
import About from "./component/about/About";
import { motion } from "framer-motion";
import Helmet from "react-helmet";
import Projects from "./component/projects/Projects";
import Contact from "./component/contact/Contact";

function App() {
    return (
        <>
            {/* This is causing: react_devtools_backend.js:3973 Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. */}
            <Helmet>
                <title>Byron Tung</title>
            </Helmet>
            <Welcome />
            <About />
            <Projects />
            <Contact />
            {/* <Welcome /> */}
            {/* <Logo /> */}
            {/* <TopNavigationBar /> */}
            {/* <Container>
                <Card>
                    <Typography variant="h4" style={{ paddingBottom: 10 }}>
                        Welcome to my website!
                    </Typography>
                    <Typography variant="h6" style={{ paddingBottom: 10 }}>
                        I am a student at the University of Alberta pursing a
                        Specialized Computer Science Degree.
                    </Typography>
                    <Typography variant="h6">
                        In my spare time, I play and coach badminton. I have
                        played it for 12+ years and enjoy giving back to the
                        communities that want my help. Since I was once in their 
                        shoes, I believe that having a mentor and a friend
                        working towards 
                    </Typography>
                </Card>
            </Container> */}
        </>
    );
}

export default App;
