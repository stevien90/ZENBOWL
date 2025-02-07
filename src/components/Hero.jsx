import React from "react";
import { Container } from "@mui/material";

const Hero1 = () => {
  return (
    <section>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4  lead mb-4 text-left">
          Nourish Your Body, Delight Your Tastebuds
        </h1>
        <div className="col-lg-6 mx-auto text-left">
          <p className="display-4 fw-bold text-body-emphasis">RICE BOWLS</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "100vh" }}>
          <div
            className="container"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1525158590585-05e83b4cce37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzaWFuJTIwZm9vZCUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              height: "100vh", // Adjust the height as needed
            }}
          >
            <div
              style={{
                backgroundImage: "url('https://i.imgur.com/aE2yb8p.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                height: "100vh", // Adjust the height as needed
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
