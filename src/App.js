import React, { useEffect, useState } from "react";
import "./style.css";
import "./temp.css";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Calendarsec from "./Calendarsec";
import Superpage from "./Superpage";
import Superpowers from "./Superpowers";
import Deadline from "./Deadline";
import Focus from "./Focus";
import Tasks from "./Tasks";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Button from "@mui/material/Button";

// import Dash from './dash.png';

const Loops = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        className="s3-capsule"
        style={{ display: "inline-block", width: "300px" }}
      >
        They already love our products 😍
      </div>
      <div
        style={{
          fontSize: "56px",
          fontWeight: "800",
          lineHeight: "120%",
          margin: "30px auto",
        }}
      >
        See what our users say about us
      </div>
    </div>
  );
};

export default function App() {
  const [isHoverstrip1, setIsHoverstrip1] = useState(false);
  const [isHoverstrip2, setIsHoverstrip2] = useState(false);
  const [isHoverstrip3, setIsHoverstrip3] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />

      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Calendarsec />
        <Superpage />
        <Superpowers />
        <Deadline />
        <Focus />
        <Tasks />
        <Features />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loops />
        <div>
          <div
            style={{
              height: "160px",
            }}
          >
            <div
              className="infinite-loop"
              onMouseEnter={() => setIsHoverstrip1(true)}
              onMouseLeave={() => setIsHoverstrip1(false)}
              style={{
                animationPlayState: isHoverstrip1 ? "paused" : undefined,
              }}
            >
              {Array(100)
                .fill(0)
                .map((item, key) => (
                  <img
                    src={`./post${parseInt(key % 3)}.png`}
                    className="infinite-loop-item"
                  />
                ))}
            </div>
          </div>

          <div
            style={{
              height: "160px",
            }}
          >
            <div
              className="infinite-loop-reverse"
              onMouseEnter={() => setIsHoverstrip3(true)}
              onMouseLeave={() => setIsHoverstrip3(false)}
              style={{
                animationPlayState: isHoverstrip3 ? "paused" : undefined,
              }}
            >
              {Array(100)
                .fill(0)
                .map((item, key) => (
                  <img
                    src={`./post${parseInt(key % 3)}.png`}
                    className="infinite-loop-item"
                  />
                ))}
            </div>
          </div>
          <div
            style={{
              height: "160px",
            }}
          >
            <div
              className="infinite-loop"
              onMouseEnter={() => setIsHoverstrip2(true)}
              onMouseLeave={() => setIsHoverstrip2(false)}
              style={{
                animationPlayState: isHoverstrip2 ? "paused" : undefined,
              }}
            >
              {Array(100)
                .fill(0)
                .map((item, key) => (
                  <img
                    src={`./post${parseInt(key % 3)}.png`}
                    className="infinite-loop-item"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Footer />
      <div className="cft" style={{position:'fixed', zIndex:'100', bottom:'20px', right:'20px', display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
        <div className="cft-btn1" style={{backgroundColor:'white', margin:'8px', borderRadius:'10px', boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
          <Button variant="outline" color="success" style={{fontSize:'12px', fontWeight:'600'}}>
            Buy this tempelate for $49
          </Button>
        </div>
        <div className="cft-btn2" style={{backgroundColor:'white', margin:'8px', borderRadius:'10px', boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
          <Button variant="outline" color="success" style={{fontSize:'12px', fontWeight:'600'}}>
            Made in Framer
          </Button>
        </div>
      </div>
    </div>
  );
}
