import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        height: "min-content",
        backgroundColor: "#f1f2f4",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="footer-board"
        style={{
          width: "90%",
          height: "min-content",
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          className="f1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "700", lineHeight: "115%" }}
          >
            Milton
          </div>

          <div style={{ width: "150px", margin: "7px auto" }}>
            A short text explaining why my startup is so cool
          </div>
          <div style={{ width: "150px", margin: "7px auto" }}>
            © My super start-up
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div
          className="f1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "700", lineHeight: "115%" }}
          >
            Products
          </div>

          <div style={{ width: "150px", margin: "7px auto" }}>Features</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Testemonial</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Pricing</div>
          <div style={{ width: "150px", margin: "7px auto" }}>FAQs</div>
        </div>
        <div
          className="f1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "700", lineHeight: "115%" }}
          >
            Products
          </div>

          <div style={{ width: "150px", margin: "7px auto" }}>Features</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Testemonial</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Pricing</div>
          <div style={{ width: "150px", margin: "7px auto" }}>FAQs</div>
        </div>
        <div
          className="f1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "700", lineHeight: "115%" }}
          >
            Products
          </div>

          <div style={{ width: "150px", margin: "7px auto" }}>Features</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Testemonial</div>
          <div style={{ width: "150px", margin: "7px auto" }}>Pricing</div>
          <div style={{ width: "150px", margin: "7px auto" }}>FAQs</div>
        </div>
        <div
          className="f1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "min-content",
          }}
        >
          <div
            style={{ fontSize: "24px", fontWeight: "700", lineHeight: "115%" }}
          >
            From the blog
          </div>

          <div style={{ width: "300px", margin: "7px auto" }}>Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</div>
          <div style={{ width: "300px", margin: "7px auto" }}>Organizing Your Calendar for Enhanced Productivity and Focus</div>
          <div style={{ width: "300px", margin: "7px auto" }}>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</div>
          <div style={{ width: "300px", margin: "7px auto" }}>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</div>
        </div>
      </div>
    </div>
  );
}
