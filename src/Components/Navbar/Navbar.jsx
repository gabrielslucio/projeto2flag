import React from "react";
import {NavLink} from "react-router-dom";
import UserLogin from "../../Functions/UserLogin/UserLogin";

import './Navbar.css';

const Navbar = (props) => {
    return(
        <nav className="app__navbar">
            <section className="app__navbar-section">
                <div className="app__navbar-container">
                    <div className="app__navbar-logo">
                        <a href="/"><span>red</span>zone gaming</a>
                    </div>
                    <div className="app__navbar-btns">

                    <div className="app__navbar-btnlg">
                            <div className="app__btn-border">
                            <NavLink 
                                className="app__cc"
                                to="/criar-conta"
                            >
                                Criar conta
                            </NavLink>
                            </div>
                        </div>

                        <div className="app__navbar-btnlg">
                            <div className="app__btn-border">
                            <NavLink 
                                className="app__cc"
                                to="/criar-conta"
                            >
                                Fazer login
                            </NavLink>
                            </div>
                        </div>
                        
                        <div className="app__navbar-btntry">
                            <div className="app__btn-border">
                                <button type="button">Experimente o Redzone Gaming</button>
                            </div>
                            
                        </div>

                        <div className="app__navbar-user">
                        <UserLogin />
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;
