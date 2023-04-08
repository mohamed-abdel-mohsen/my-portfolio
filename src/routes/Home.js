import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import Work from "../components/workcsrd/Work";

const Home = ()=> {
    return(
        <div>
            <Navbar />
            <Hero />
            <Work/>
            <Footer />
        </div>
    );
};


export default Home