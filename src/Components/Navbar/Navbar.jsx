import React from "react";
import {NavLink} from "react-router-dom";
import UserLogin from "../../Functions/UserLogin/UserLogin";

import './Navbar.css';

/* 

DOCUMENTAÇÃO DE CÓDIGO PARA FAZER CONDITIONAL RENDER A ITEMS UTILIZANDO A LOCALSTORAGE

1) Primeiro criar a const de modo a obter o valor da localStorage;
2) Criar o conditional render para os links de navegação;
3) Adicionar butão de logout;
4) Criar um handleLogoutClick event para alterar o valor do isLoggedIn de true para false.

*/

const Navbar = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    const handleLogoutClick = () => {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        window.location.reload(); //para dar reload na página
    }

    return(
        <nav className="app__navbar">
            <section className="app__navbar-section">
                <div className="app__navbar-container">
                    <div className="app__navbar-logo">
                        <a href="/"><span>red</span>zone gaming</a>
                    </div>
                    <div className="app__navbar-btns">

                    {isLoggedIn ? (
                        <div className="app__navbar-btnlg">
                        <div className="app__btn-border">
                          <NavLink className="app__cc" to="/" onClick={handleLogoutClick}>
                            Fazer logout
                          </NavLink>
                        </div>
                      </div>
                    ) : (
                    <>
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
                                to="/login"
                            >
                                Fazer login
                            </NavLink>
                            </div>
                        </div>
                    </>
                    )}




                        
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
