import React, {useState} from "react";

import {AiOutlineUser} from "react-icons/ai";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";


import './UserLogin.css';
import { NavLink } from "react-router-dom";

function UserLogin() {
    const [showOptions, setShowOptions] = useState(false);
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    const handleIconClick = () => {
        setShowOptions(!showOptions);
    }

    return (
        <div className="user-area">
            <div className="user-icon" onClick={handleIconClick}>
                <AiOutlineUser className="icon"/>
                {showOptions ? <MdKeyboardArrowUp className="arrow-up" /> : <MdKeyboardArrowDown className="arrow-down"/>}
            </div>
            {showOptions && (
                <table className="user-options">
                    <tbody>
                        <tr>
                            <td>
                            <NavLink
                                className="app__conta"
                                to={isLoggedIn ? "/minha-conta" : "/criar-conta"}
                            >
                                {isLoggedIn ? "Minha Conta" : "Criar conta"}
                            </NavLink>
                            </td>
                            <td>
                                <button>
                                    FAQ
                                </button>
                            </td>    
                            <td>
                                <button>
                                Suporte
                                </button>
                            </td>   
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserLogin;