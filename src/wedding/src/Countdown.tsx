import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const intervalCountdown = setInterval(() => {
      const currentTime = new Date().getTime();
      const eventTime = new Date(2028, 4, 29).getTime();

      let remainingTime = eventTime - currentTime;

      if (remainingTime <= 0) {
        remainingTime = 0;
        clearInterval(intervalCountdown);
      }

      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(intervalCountdown);
  }, []);

  const formatTime = (time) => {
    const totalDays = Math.floor(time / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30.44);
    const daysAfterMonths = Math.floor(totalDays - months * 30.44);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return (
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "40pt",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className=""
      >
        <div>
          {months.toString()} <span>months</span>
        </div>
        <div>
          {daysAfterMonths.toString()} <span>days</span>
        </div>
        <div>
          {hours.toString()} <span>hours</span>
        </div>
        <div>
          {minutes.toString()} <span>minutes</span>
        </div>
        <div>
          {seconds.toString()} <span>seconds</span>
        </div>
      </div>
    );
  };
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "400px",
        backgroundColor: "white",
        alignContent: "center",
      }}
    >
      <CardContent>{formatTime(timeRemaining)}</CardContent>
    </Card>
  );
}
