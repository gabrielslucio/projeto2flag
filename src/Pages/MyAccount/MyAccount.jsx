import React from "react";

import './MyAccount.css';
import images from "../../Constants/images";

const MyAccount = () => {
    return (
        <section className="app__my-account">
            <div className="app__my-account-container">
                <div className="app__profile-pic">
                    <h1>Username</h1>
                    <img src={images.aatrox} alt="profile"/>
                    <button>Escolher nova imagem</button>
                </div>

                <div className="app__profile-user">
                    <h2>Os meus guias</h2>
                    <button>Ver guias</button>
                </div>
                
            </div>
        </section>
    );
}

export default MyAccount;