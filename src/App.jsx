import { useState } from "react";
import "./App.css";
import Acceuil from "./pages/Acceuil";
import SplashScreen from "./components/SplashScreen";
import  Navbar  from "./components/layouts/Navbar";



function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>

      <Navbar></Navbar>
      
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      <div style={{ opacity: showSplash ? 0 : 1, transition: "0.5s ease" }}>
        {!showSplash && <Acceuil />}
      </div>
    </>
  );
}

export default App;
