import React from "react";
import { FaHome,FaMobile ,FaMailBulk, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="left">
                    <div className="location cc">
                        <FaHome size={27} style={{color:"#fff" , marginRight:"2rem"}} />
                        <div>
                            <p>Cairo, EGYPT</p>
                        </div>
                    </div>
                    <div className="phone cc">
                        <FaMobile size={27} style={{color:"#fff" , marginRight:"2rem"}}/>
                        <div>
                             <p> +20 1128433883 </p>
                        </div>
                    </div>
                    <div className="email cc">
                        <FaMailBulk size={27} style={{color:"#fff" , marginRight:"2rem"}} />
                        <div>
                            <p>Moh.mohsen8074@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <h3 className="right--content">Personal Statement</h3>
                    <p className="right--content"> 
                       A greatly motivated Engineer who's Seeking for a position 
                       in a leading organization that would utilize and develop   
                       my knowledge as well as make use and enhance my interpersonal skills,
                       where there is a chance to participate and add to its growth   
                    </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/mohamed-abdel-mohsen/">
                            <FaLinkedin size={35} style={{marginLeft:"1.75rem"}} />
                        </a>
                        <a href="https://github.com/mohamed-abdel-mohsen">
                            <FaGithub size={35} style={{marginLeft:"1.75rem"}}/>
                        </a>
                        <a href="https://twitter.com/">
                            <FaTwitter size={35} style={{marginLeft:"1.75rem"}}/>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;