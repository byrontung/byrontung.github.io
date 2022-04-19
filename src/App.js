import "./App.css";
import TopNavigationBar from "./component/TopNavigationBar";
import { Card, Container, TableSortLabel, Typography } from "@mui/material";
import Welcome from "./component/Welcome";

function App() {
    return (
        <div>
            <Welcome/>
            {/* <TopNavigationBar /> */}
            {/* <Container>
                <Card sx={{ m: 10 }}>
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
        </div>
    );
}

export default App;
