import React, { useState, useEffect } from "react";
import {AiOutlineClose} from "react-icons/ai";
import images from "../../Constants/images";
import championImages from "../../Constants/championImages";

import './EditProfile.css';
import { NavLink } from "react-router-dom";

const EditProfile = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(localStorage.getItem('selectedImage') || null);
    const [newUsername, setNewUsername] = useState("");
    const [showUsernameModal, setShowUsernameModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newEmail, setNewEmail] = useState("");
    const [showEmailModal, setShowEmailModal] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const currentPassword = JSON.parse(localStorage.getItem('user'));
    const currentEmail = JSON.parse(localStorage.getItem('user'));

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

    const handleOpenUsernameModal = () => {
        setShowUsernameModal(true);
    }

    const handleCloseUsernameModal = () => {
        setShowUsernameModal(false);
    }

    const handleOpenPasswordModal = () => {
        setShowPasswordModal(true);
    }

    const handleClosePasswordModal = () => {
        setShowPasswordModal(false);
    }

    const handleOpenEmailModal = () => {
        setShowEmailModal(true);
    }

    const handleCloseEmailModal = () => {
        setShowEmailModal(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedUser = { ...currentUser, username: newUsername };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        handleCloseUsernameModal();
    }

    const handlePasswordSubmit = (event) => {
        event.preventDefault();

        const updatedPassword = { ...currentPassword, password: newPassword };
        localStorage.setItem("user", JSON.stringify(updatedPassword));
        handleClosePasswordModal();
    }

    const handleEmailSubmit = (event) => {
        event.preventDefault();

        const updatedEmail = { ...currentEmail, emailnpm : newEmail };
        localStorage.setItem("user", JSON.stringify(updatedEmail));
        handleCloseEmailModal();
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
                        <button onClick={handleOpenUsernameModal}>Alterar username</button>
                        <button onClick={handleOpenPasswordModal}>Alterar password</button>
                        <button onClick={handleOpenEmailModal}>Alterar email</button>
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

        {showUsernameModal && (
            <div className="modal-username">
                <div className="modal-username-content">
                    <div className="modal-user-header">
                        <div className="ghost"></div>
                        <h3>Altere o seu <span>username</span></h3>
                        <div className="modal-btn-close">
                            <button onClick={handleCloseUsernameModal} type="button"><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div className="modal-user-container">
                            <form onSubmit={handleSubmit}>
                                <h4>Username antigo: <span>{currentUser.username}</span></h4>
                                <label htmlFor="new-username">
                                    Novo username
                                </label>
                                <input type="text" id="new-username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                                <button type="submit">Alterar</button>
                            </form>
                        </div>
                </div>
            </div>
        )}

        {showPasswordModal && (
            <div className="modal-password">
                <div className="modal-password-content">
                    <div className="modal-password-header">
                        <div className="ghost"></div>
                        <h3>Altere a sua <span>password</span></h3>
                        <div className="modal-btn-close">
                            <button onClick={handleClosePasswordModal} type="button"><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div className="modal-password-container">
                            <form onSubmit={handlePasswordSubmit}>
                                <label htmlFor="new-password">
                                    Nova password
                                </label>
                                <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                <button type="submit">Alterar</button>
                            </form>
                        </div>
                </div>
            </div>
        )}

        {showEmailModal && (
            <div className="modal-email">
                <div className="modal-email-content">
                    <div className="modal-email-header">
                        <div className="ghost"></div>
                        <h3>Altere o seu <span>email</span></h3>
                        <div className="modal-btn-close">
                            <button onClick={handleCloseEmailModal} type="button"><AiOutlineClose /></button>
                        </div>
                    </div>

                    <div className="modal-email-container">
                            <form onSubmit={handleEmailSubmit}>
                                <h4>Email antigo: <span>{currentUser.email}</span></h4>
                                <label htmlFor="new-username">
                                    Novo email
                                </label>
                                <input type="email" id="new-username" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                <button type="submit">Alterar</button>
                            </form>
                        </div>
                </div>
            </div>
        )}

        

       </section>
    );
}

export default EditProfile;