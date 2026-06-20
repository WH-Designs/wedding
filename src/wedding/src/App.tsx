import { Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                backgroundColor: "white",
              }}
            >
              <CardContent>
                <Swiper
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: "400px",
                        backgroundColor: "yellow",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: "400px",
                        backgroundColor: "pink",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: "400px",
                        backgroundColor: "green",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: "400px",
                        backgroundColor: "blue",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card
                      sx={{
                        width: "100%",
                        minHeight: "400px",
                        backgroundColor: "red",
                      }}
                    >
                      <CardContent></CardContent>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </CardContent>
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
