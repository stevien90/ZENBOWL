import React from "react";

function Hero2() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="flex">
          <h1>
            <em>Nourish Your Body, Delight Your Tastebuds</em>
            AUTHENTIC RICE BOWL
          </h1>
          <Link className="hero-btn hero-btn__on-yellow" to="/subscription">
            Get Started
          </Link>
        </div>

        <div
          className="fixed-bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525158590585-05e83b4cce37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzaWFuJTIwZm9vZCUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D')",
          }}
        >
          <img
            alt="Rice bowl"
            width="733"
            src="https://i.imgur.com/AsNapkh.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
