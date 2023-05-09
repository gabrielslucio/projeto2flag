import React, { useEffect, useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

import './MyAccount.css';

import championImages from "../../Constants/championImages";
import images from "../../Constants/images";
import { NavLink } from "react-router-dom";

/* 
DOCUMENTAÇÃO DE CÓDIGO - CRIAÇÃO DE MODAL 
1) Criar uma state de controlo;
2) Criar boolean com um handleChooseImageClick function para mostrar conteúdo;
3) Criar boolean para fechar o modal;
4) Adicionar o onClick ao butão.
*/

/*
DOCUMENTAÇÃO DE CÓDIGO - IMAGEM SELECIONADA
1) Criar uma state de controlo;
2) Criar uma função de controlo;
3) Adicionar conditional render.

*/ 

const MyAccount = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(localStorage.getItem('selectedImage') || null);

    const currentUser = JSON.parse(localStorage.getItem('user'));

    const handleChooseImageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    const handleChooseNewImage = () => {
        if (selectedImage) {
            localStorage.setItem("selectedImage", selectedImage)
        }
        setShowModal(false);
    }

    useEffect(() => {
        setSelectedImage(localStorage.getItem('selectedImage'));
    }, []);

    return (
        <section className="app__my-account">
            <div className="app__my-account-container">
                <div className="app__profile-pic">
                    <h1>{currentUser.username}</h1>
                    {selectedImage ? (
                        <img 
                            src={selectedImage}
                            alt="profile"
                            className="selected-image"
                        />
                    ) : (
                        <img src={images.aatrox} alt="profile"/>
                    )}
                    
                    <button onClick={handleChooseImageClick}>Escolher nova imagem</button>

                    <NavLink className="app__editar-link" to="/editar-perfil">Editar Perfil</NavLink>
                </div>

                <div className="app__profile-user">
                    <div className="app__guide-header">
                        <h2>Os meus <span>guias</span></h2>
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
                            <span className="upvote">100</span>
                            <p>Votos</p>
                            <span className="downvote">4</span>
                            <BsFillArrowDownCircleFill className="arrowdown" />
                            <button>Editar</button>
                        </div>

                        <div className="app__champion-icon">
                            <img src={images.soraka} alt="" />
                        </div>

                        <div className="app__guide-info">
                            <h2>Soraka Top - "Um guia ainda melhor"</h2>
                            <p>Guia criado por <span>{currentUser.username}</span> - updated a Abril 26, 2023</p>
                        </div>
                    </div>

                    <div className="app__view-guides">
                        <NavLink to="/editar-perfil-guias">Ver todos os meus guias</NavLink>
                        <button>Criar guia</button>
                    </div>
                    
                </div>                
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                       

                        <div className="modal-header">
                            <div className="ghost">
                                
                            </div> 

                            <h3>Escolha uma nova <span>imagem</span></h3>

                            <div className="modal-btn-close">
                                <button onClick={handleCloseModal} type="button"><AiOutlineClose /></button>
                            </div>
                        </div>
                       

                        <div className="modal-container">
                            <div className="modal-images">
                                {championImages.map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image} 
                                        alt="picture" 
                                        className={selectedImage === image ? "selected" : ""}
                                        onClick={() => handleImageSelect(image)}
                                    />
                                ))}
                            </div>
                        </div>                        

                            <div className="modal-btn-choose">
                                <button onClick={handleChooseNewImage}>Escolher nova imagem</button>
                            </div>
                    </div>
                </div>
            )}

        </section>
    );
}

export default MyAccount;