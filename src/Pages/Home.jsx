import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import LandingPage from "../components/LandingPage";

const Home = () => {
    return(
        <>
        <LandingPage />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
        
    )
}

export default Home;
