import React from "react";
import "./card.css";
import intro from "../../img/about.jpg";


const Card = () => {
    return(
        <div className="card__container">
            <h2>Fade in Overlay</h2>
            <p>Hover over the image to see the effect.</p>

            <div class="container">
                <img src={intro} alt="Avatar" class="image" />
                <div class="overlay">
                    <div class="text">Hello World</div>
                </div>
            </div>
        </div>
    );
};

export default Card;