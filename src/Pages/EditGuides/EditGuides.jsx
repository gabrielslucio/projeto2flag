import React from "react";
import { NavLink } from "react-router-dom";

import './EditGuides.css';

const EditGuides = () => {
    return (
        <section className="app__edit-guides">
            <div className="app__edit-guides-container">
                <div className="app__edit-navigation">
                    <div className="app__cms-header">
                        <h1>Dash<span>board</span></h1>
                    </div>

                    <div className="app__cms-p">
                        <NavLink to="/editar-perfil">Perfil</NavLink>
                    </div>

                    <div className="app__cms-g">
                        <NavLink to="/editar-perfil-guias">Guias</NavLink>
                    </div>

                    <div className="app__cms-c">
                        <NavLink to="/editar-perfil-comentarios">Comentários</NavLink>
                    </div>
                </div>           

                <div className="app__cms-menu">
                </div>     
            </div>
        </section>
    );
}

export default EditGuides