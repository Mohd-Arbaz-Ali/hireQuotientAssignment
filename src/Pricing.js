import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Pricing() {
  const [ismonthly, setismonthly] = useState(true);

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="s3-capsule"
          style={{ display: "inline-block", width: "170px" }}
        >
          Pricing and Plans
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: "800",
            lineHeight: "120%",
            margin: "30px auto",
          }}
        >
          Find the best plan for your needs
        </div>
      </div>

      <div
        className="toggle-buttons"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="web" onClick={() => setismonthly(true)}>
            Monthly
          </ToggleButton>
          <ToggleButton value="android" onClick={() => setismonthly(false)}>
            Annually
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className="price-card-container"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        {ismonthly ? (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./month-price1.png"></img>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./month-price2.png"></img>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./month-price3.png"></img>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width:"300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./annual-price1.png"></img>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./annual-price2.png"></img>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "95%" }} src="./annual-price3.png"></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
