import React from "react";
import { NavLink } from "react-router-dom";
import images from "../../Constants/images";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

import './EditGuides.css';

const EditGuides = () => {

    const currentUser = JSON.parse(localStorage.getItem("user"));

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
                    <div className="app__cms-header">
                        <h1>Ver todos os meus <span>guias</span></h1>
                    </div>

                    <div className="app__cms-guide-list">
                        <div className="app__guides">
                    <div className="app__votes">
                        <BsFillArrowUpCircleFill className="arrowup" />
                        <span className="upvote">22</span>
                        <p>Votos</p>
                        <span className="downvote">8</span>
                        <BsFillArrowDownCircleFill className="arrowdown" />
                        <button>Editar</button>

                    </div>

                    <div className="app__champion-icon">
                        <img src={images.aatrox} alt="" />
                    </div>

                    <div className="app__guide-info">
                        <h2>Aatrox Top - "O melhor guia de todos"</h2>
                        <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                    </div>
                        </div>

                        <div className="app__guides">
                    <div className="app__votes">
                        <BsFillArrowUpCircleFill className="arrowup" />
                        <span className="upvote">22</span>
                        <p>Votos</p>
                        <span className="downvote">8</span>
                        <BsFillArrowDownCircleFill className="arrowdown" />
                        <button>Editar</button>
                    </div>

                    <div className="app__champion-icon">
                        <img src={images.aatrox} alt="" />
                    </div>

                    <div className="app__guide-info">
                        <h2>Aatrox Top - "O melhor guia de todos"</h2>
                        <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                    </div>
                        </div>

                        <div className="app__guides">
                    <div className="app__votes">
                        <BsFillArrowUpCircleFill className="arrowup" />
                        <span className="upvote">22</span>
                        <p>Votos</p>
                        <span className="downvote">8</span>
                        <BsFillArrowDownCircleFill className="arrowdown" />
                        <button>Editar</button>

                    </div>

                    <div className="app__champion-icon">
                        <img src={images.aatrox} alt="" />
                    </div>

                    <div className="app__guide-info">
                        <h2>Aatrox Top - "O melhor guia de todos"</h2>
                        <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                    </div>
                        </div>

                        <div className="app__guides">
                    <div className="app__votes">
                        <BsFillArrowUpCircleFill className="arrowup" />
                        <span className="upvote">22</span>
                        <p>Votos</p>
                        <span className="downvote">8</span>
                        <BsFillArrowDownCircleFill className="arrowdown" />
                        <button>Editar</button>

                    </div>

                    <div className="app__champion-icon">
                        <img src={images.aatrox} alt="" />
                    </div>

                    <div className="app__guide-info">
                        <h2>Aatrox Top - "O melhor guia de todos"</h2>
                        <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                    </div>
                        </div>

                        <div className="app__guides">
                    <div className="app__votes">
                        <BsFillArrowUpCircleFill className="arrowup" />
                        <span className="upvote">22</span>
                        <p>Votos</p>
                        <span className="downvote">8</span>
                        <BsFillArrowDownCircleFill className="arrowdown" />
                        <button>Editar</button>
                    </div>

                    <div className="app__champion-icon">
                        <img src={images.aatrox} alt="" />
                    </div>

                    <div className="app__guide-info">
                        <h2>Aatrox Top - "O melhor guia de todos"</h2>
                        <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                    </div>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
}

export default EditGuides