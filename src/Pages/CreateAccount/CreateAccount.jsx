import React, {useState} from "react";

import './CreateAccount.css';
import { NavLink, useNavigate } from "react-router-dom";

/* 
DOCUMENTAÇÃO DE CÓDIGO - localStorage

1) import {useState};
2) criar states;
3) criar o handleSubmit com um setItem;
4) meter os valores para empty strings setName(''), etc;
5) alterar o form para onSubmit = {handleSubmit};
6) alterar os inputs para onChange.
*/

/*
DOCUMENTAÇÃO CÓDIGO - useNavigate

1) criar const navigate = useNavigate();
2) neste caso é para enviar para outra página, user o setTimeout() no handleSubmit.
*/

const CreateAccount = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userData));
        setName('');
        setPassword('');
        setEmail('');
        setAccountCreated(true);

        setTimeout(() => {
            navigate(`/`);
        }, 2000);
    }

    return(
        <section className="app__create-account">
            <div className="app__nav-home">
                <div className="app__navbar-logo">
                    <a href="/"><span>red</span>zone gaming</a>
                </div>
            </div>
            <div className="app__create-acc-container">
                <div className="app__create-acc-header">
                    <h1>Cria uma <span>conta</span></h1>
                </div>
                <div className="app__create-list">
                    {accountCreated && (
                        <div className="app__alert">
                            <p>Conta criada com sucesso</p>
                        </div>
                    )}
                    <form className="app__create-form" onSubmit={handleSubmit}>
                        <label>
                            Nome:
                        </label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required   
                        />

                        <label>
                            Email:
                        </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <label>
                            Password:
                        </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <div className="app__btn-lg-cr">
                            <button className="btn-create" type="submit">
                            Criar conta
                        </button>                        
                        <NavLink className="link-log-in" to="">
                            Fazer Log In
                        </NavLink>
                        </div>
                    </form>                    
                </div>                
            </div>
        </section>
    )
}

export default CreateAccount;