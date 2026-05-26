import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animation.json";

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // début du fade

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3000); // fin splash

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div style={{ ...styles.container, opacity: fadeOut ? 0 : 1 }}>
      <Player
        autoplay
        loop={false}
        src={animation}
        style={styles.animation}
      />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 9999,
    transition: "opacity 0.5s ease",
  },
  animation: {
    width: "300px",
    height: "300px",
  },
};

export default SplashScreen;