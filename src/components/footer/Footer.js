import React from 'react';
import { leftContainerInfo, rightContainerInfo, personalStatment } from '../../constant/Constant';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="left">
                    {leftContainerInfo.map(({ icon, info, className }, index) => (
                        <div key={index} className={className}>
                            {icon}
                            <div>
                                <p>{info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="right">
                    <h3 className="right--content">Personal Statement</h3>
                    <p className="right--content">{personalStatment}</p>
                    <div className="social">
                        {rightContainerInfo.map(({ link, icon }, index) => (
                            <a key={index} href={link}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
