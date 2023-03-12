import React from "react";
import LanguageSelect from "../../Functions/LanguageSelect";

import './Navbar.css';

const Navbar = (props) => {
    return(
        <nav className="app__navbar">
            <section className="app__navbar-section">
                <div className="app__navbar-container">
                    <div className="app__navbar-logo">
                        <h1>redzone gaming</h1>
                    </div>
                    <div className="app__navbar-btns">
                        <div className="app__navbar-btnlg">
                            <button type="button">Fazer login</button>
                        </div>
                        
                        <div className="app__navbar-btntry">
                            <button type="button">Experiment o Redzone Gaming</button>
                        </div>

                        <div className="app__navbar-language">
                            <LanguageSelect language={props.language || 'pt'} onLanguageChange={props.onLanguageChange} />                           
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Navbar;