import React, { useState, useEffect } from "react";
import {AiOutlineClose} from "react-icons/ai";
import images from "../../Constants/images";
import championImages from "../../Constants/championImages";

import './EditProfile.css';

const EditProfile = () => {
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
                        <h2>Perfil de: <span> {currentUser.username}</span></h2> 

                    </div>
                    
                    <div className="app__cms-p-img">
                       {selectedImage ? (
                        <img 
                            src={selectedImage}
                            alt="profile"
                            className="selected-image"
                        />
                    ) : (
                        <img src={images.aatrox} alt="profile"/>
                    )}
                    
                    <button onClick={handleChooseImageClick}>Alterar imagem de perfil</button>
                    </div>

                    <div className="app__cms-p-btns">
                        <button>Alterar username</button>
                        <button>Alterar password</button>
                        <button>Alterar email</button>
                    </div>
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

export default EditProfile;