import React from "react";
import "../styles.css";
import "../reviews.css";
import "../offers.css";
import "../footer.css";
import "../navbar.css";
import "../construction.css";
import "../subscription.css";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Hero2 from "./Hero2";
import Features from "./Features";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import Carousel from "./Carousel";
import Reviews from "./Reviews";
import Offers from "./Offers";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <Banner text="25% OFF FIRST TIME SUBSCRIPTION + FREE SHIPPING 🍚" />
      <NavBar />
      <Hero2 />
      <Features
        title="Fresh, Flavorful Asian Rice Bowls"
        featureTitleOne="Choose Your Rice Bowls"
        featureDesriptionOne="Choose from a variety of rice bowls inspired by different regions of Asia, each one designed to make your taste buds dance."
        featureImageOne={<RiceBowlIcon sx={{ fontSize: 200 }} />}
        featureTitleTwo="Expertly Cooked And Prepared To Perfection"
        featureDesriptionTwo="Healthy ingredients and unique flavors sourced from across Asia. Our gourmet chefs handle the prep, so you can enjoy the flavor."
        featureImageTwo={<TakeoutDiningIcon sx={{ fontSize: 200 }} />}
        featureTitleThree="Simply Heat, Serve, and Savor."
        featureDesriptionThree="No prep, no hassle. Our ready-to-eat meals arrive, so you can enjoy a delicious meal in minutes."
        featureImageThree={<MicrowaveIcon sx={{ fontSize: 200 }} />}
      />
      <Carousel />
      <Reviews />
      <Offers />
      <Footer />
    </div>
  );
};

export default Home;
