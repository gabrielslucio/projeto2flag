import React from "react";
import images from "../../Constants/images";



import './EditProfile.css';

const EditProfile = () => {
    return (
       <section className="app__edit-profile">
        <div className="app__edit-profile-container">
            <div className="app__edit-navigation">

                <div className="app__cms-header">
                    <h1>Dash<span>board</span></h1>
                </div>

                <div className="app__cms-p">
                    <a href="">Perfil</a>
                </div>

                <div className="app__cms-g">
                    <a href="">Guias</a>
                </div>

                <div className="app__cms-c">

                    <a href="">Comentários</a>
                </div>
                
            </div>

            <div className="app__cms-menu">

                <div className="app__cms-perfil">

                    <div className="app__cms-p-header">
                        <h2>Perfil</h2>
                        <span />
                        <h2>Gabriel</h2>
                    </div>
                    
                    <div className="app__cms-p-img">
                        <img src={images.aatrox} alt="profile" />
                        <button>Alterar imagem de perfil</button>
                    </div>

                    <div className="app__cms-p-btns">
                        <button>Alterar username</button>
                        <button>Alterar password</button>
                        <button>Alterar email</button>
                    </div>
                </div>

            </div>

        </div>

       </section>
    );
}

export default EditProfile;