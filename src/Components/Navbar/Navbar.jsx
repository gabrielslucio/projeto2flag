import React from "react";
import LanguageSelect from "../../Functions/LanguageSelect/LanguageSelect";
import UserLogin from "../../Functions/UserLogin/UserLogin";

import './Navbar.css';

const Navbar = (props) => {
    return(
        <nav className="app__navbar">
            <section className="app__navbar-section">
                <div className="app__navbar-container">
                    <div className="app__navbar-logo">
                        <button><span>red</span>zone gaming</button>
                    </div>
                    <div className="app__navbar-btns">
                        <div className="app__navbar-btnlg">
                            <div className="app__btn-border">
                            <button type="button">Fazer login</button>
                            </div>
                        </div>
                        
                        <div className="app__navbar-btntry">
                            <div className="app__btn-border">
                                <button type="button">Experimente o Redzone Gaming</button>
                            </div>
                            
                        </div>

                        <div className="app__navbar-language">
                            <LanguageSelect language={props.language || 'pt'} onLanguageChange={props.onLanguageChange} />                           
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