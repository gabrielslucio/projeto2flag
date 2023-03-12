import React, {useState} from "react";

import {AiOutlineUser, AiOutlineInfoCircle, AiOutlineQuestionCircle} from "react-icons/ai";
import {FaGamepad} from "react-icons/fa";
import {GiEntryDoor} from "react-icons/gi";

import './UserLogin.css';

function UserLogin() {
    const [showOptions, setShowOptions] = useState(false);

    const handleIconClick = () => {
        setShowOptions(!showOptions);
    }

    return (
        <div className="user-area">
            <div className="user-icon" onClick={handleIconClick}>
                <AiOutlineUser />
            </div>
            {showOptions && (
                <table className="user-options">
                    <tbody>
                        <tr>
                            <td>
                                <button>
                                    <AiOutlineInfoCircle />                                    
                                    Sobre o RedZone
                                </button>
                            </td>
                            <td>
                                <button>
                                    <FaGamepad />
                                    Jogos e itens
                                </button>
                            </td>    
                            <td>
                                <button>
                                <AiOutlineQuestionCircle />
                                Suporte
                                </button>
                            </td>   
                            <td>
                                <button>
                                <GiEntryDoor />
                                Fazer login
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