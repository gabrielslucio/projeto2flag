import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

import './LoginPage.css'

/* 
DOCUMENTAÇÃO DE CÓDIGO - LOG IN COM localStorage

1) Primeiro usar o state;
2) Criar as consts para username, password is isLoggedIn;
3) Criar um evento de handleLogin;
4) Ir buscar a informação ao localStorage;
5) Criar a condição com um boolean;
6) Adicionar o onSubmit no form com o handleLogin;
7) Adicionar os onChange aos inputs;
8) Criar mensagem em conditional render;
9) Fazer com que a informação seja guardada em localStorage;

*/


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const storedUser = localStorage.getItem('user');
        const user = JSON.parse(storedUser);

        if (user && user.username === username && user.password === password) {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', true)
            setTimeout(() => {
                navigate(`/`);
            }, 2000);
        } else {
            setIsLoggedIn(false);   
            localStorage.setItem('isLoggedIn', false)         
        }

        
    };

    return (
        <section className="app__login-page">

            <div className="app__nav-home">
                <div className="app__navbar-logo">
                    <a href="/"><span>red</span>zone gaming</a>
                </div>
            </div>

            <div className="app__login-page-container">

            {isLoggedIn === true && ( // conditionally render success message
                <div className="app__login-page-success">
                    <p>Log in bem sucedido</p>
                </div>
            )}

            {isLoggedIn === false && ( // conditionally render failure message
                <div className="app__login-page-failure">
                    <p>Username ou password inválida</p>
                </div>
            )}
            
            <div className="app__login-page-header">
                <h1>Fazer<span> log in</span></h1>
            </div>

            <div className="app__login-page-form">
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                    </label>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}></input>

                    <label>
                        Password:
                    </label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}></input>

                    <div className="app__btn-lg-cr">
                        <button className="btn-create" type="submit">
                            Fazer Log In
                        </button>                        
                        <NavLink className="link-log-in" to="/criar-conta">
                            Criar conta
                        </NavLink>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default LoginPage;