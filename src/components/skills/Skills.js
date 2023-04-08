import React from "react";
import "./skills.css"; 
import {SiJavascript , SiTypescript ,SiTailwindcss,SiHtml5,SiJasmine,SiExpress} from "react-icons/si";
import {FaNodeJs , FaSass ,FaBootstrap,FaCss3Alt,FaReact,FaDatabase ,FaAws ,FaDocker} from "react-icons/fa";

const Skills = () => {
    return(
        <div className="cards">
            <h2>Skills</h2>
            <div className="cards__content">

                <div className="card">
                    <div className="icon">
                        <SiHtml5 size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> HTML5 </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaCss3Alt size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> CSS3 </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaSass size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> Sass </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaBootstrap size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> BootStrap </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <SiTailwindcss size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> TailWind </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <SiJavascript size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> JavaScript </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <SiTypescript size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> TypeScript </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaReact size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> React.js </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaNodeJs size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> NodeJs </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <SiExpress size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> Express </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <SiJasmine size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> Jasmine(TDD,INTEGRATION) </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaDatabase size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> DataBase (SQL , NoSQL) </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaAws size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> Amazon Web Service </h2>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaDocker size={30} style={{color:"black"}} />
                    </div>
                    <div className="info">
                        <h2> Docker </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Skills;