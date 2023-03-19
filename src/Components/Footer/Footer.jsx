import React from "react";

import {AiOutlineMail} from "react-icons/ai";
import {BsFacebook, BsInstagram, BsTwitter, BsDiscord} from "react-icons/bs";

import './Footer.css';

const Footer = () => {

    return (
        <footer className="app__footer">
            <div className="app__footer-container">
                <div className="app__footer-lgsc">
                    <div className="app__footer-stext">
                        <h1>Socials</h1>
                    </div>

                   
                    <div className="app__footer-socials">
                        <ul className="app__socials-ul">
                            <li className="app__fb">
                                <button><BsFacebook /></button>
                            </li>

                            <li className="app__insta">
                                <button><BsInstagram /></button>
                            </li>

                            <li className="app__twitter">
                                <button><BsTwitter /></button>
                            </li>

                            <li className="app__discord">
                                <button><BsDiscord /></button>
                            </li>

                            <li className="app__contact">
                                <button><AiOutlineMail /></button>
                            </li>
                        </ul>
                    </div>
                </div>    

                 <div className="app__footer-logo">
                        <button><span>red</span>zone gaming</button>
                    </div>
  

                <div className="app__footer-about">
                    <ul>
                        <li><h2>Sobre nós</h2></li>
                        <li><h2>FAQ</h2></li>
                        <li><h2>Termos de serviço</h2></li>
                        <li><h2>Política de privacidade</h2></li>
                    </ul>
                </div>
            </div>

        </footer>
    );

}

export default Footer;