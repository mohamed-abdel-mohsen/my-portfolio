import React from "react";
import "./hero.css";
import intro from "../../img/intro__img.jpg"
import { Link } from "react-router-dom";

const Hero = ()=> {
    return(
        <div className="hero">
            <div className="mask">
                <img className="hero__img" src={intro} alt="hero"/>
            </div>
            <div className="content">
                <h3>I'm a Freelancer</h3>
                <h1>React Developer. </h1>
                <div className="her--btn">
                    <Link to="/Project" className="btn"> Projects </Link>
                    <Link to="/Contact" className="btn"> Contact </Link>
                </div>
            </div>
        </div>
    );
};


export default Hero;