import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import './EditComments.css';

const EditComments = () => {

    const currentUser = JSON.parse(localStorage.getItem("user"));
    const [selectedImage, setSelectedImage] = useState(localStorage.getItem('selectedImage') || null);


    return (
        <section className="app__edit-comments">
            <div className="app__edit-comments-container">

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
                        <div className="app__cms-c-header">
                            <h2>Todos os comentários de: <span>{currentUser.username}</span></h2>
                        </div>

                        <div className="app__cms-comments-list">
                          
                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>  

                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>  

                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>  

                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>  

                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>  

                            <div className="app__cms-c">
                                <div className="app__user-pic">
                                    <img src={selectedImage} alt="profile" />
                                </div>

                                <div className="app__user-name">
                                    <span>{currentUser.username}</span>
                                </div>

                                <button>Apagar</button>

                                <div className="app__guide-name">
                                    <p>Aatrox Top - "O melhor guia de todos!" - guia criado por <span>Gabriel</span></p>
                                </div>

                                <div className="app__user-comment">
                                    <p>Este guia é realmente muito bom!</p>
                                </div>

                                
                            </div>                                                      
                        </div>
                    </div>
                </div>               
        </section>
    )
}

export default EditComments;