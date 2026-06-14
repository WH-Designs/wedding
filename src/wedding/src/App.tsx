import { Card, CardContent } from "@mui/material";
import "./styles.scss";
import Countdown from "./Countdown";

function App() {
  return (
    <div className="bg-container">
      <div className="content">
        <h1>Wedding</h1>
        <Card>
          <CardContent sx={{ width: "65vw", minHeight: "fit-content" }}>
            <Countdown />
            <Card
              sx={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "green",
              }}
            >
              <CardContent></CardContent>
            </Card>
            <Card
              sx={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "yellow",
              }}
            >
              <CardContent></CardContent>
            </Card>
            <Card
              sx={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "purple",
              }}
            >
              <CardContent></CardContent>
            </Card>
            <Card
              sx={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "black",
              }}
            >
              <CardContent></CardContent>
            </Card>
            <Card
              sx={{
                width: "100%",
                minHeight: "400px",
                backgroundColor: "blue",
              }}
            >
              <CardContent></CardContent>
            </Card>
            <Card
              sx={{ width: "100%", minHeight: "400px", backgroundColor: "red" }}
            >
              <CardContent></CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
    /** background photo full page for all content to scroll on top of 
      header text for our wedding with circle photo 
      countdown 
      event carasoule 
      when and where text 
      photo block 
      gift registry link/carasoel of items 
      rsvp form */
  );
}

export default App;
