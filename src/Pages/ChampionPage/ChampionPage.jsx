import React from "react";
import { useParams } from "react-router";
import champion from "../../Constants/champion.json";
import championImages from "../../Constants/championImages";

import {BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsEyeFill, BsChatDotsFill} from "react-icons/bs"

import './ChampionPage.css';

const ChampionPage = () => {
    //useParams para obter o id do URL
    const {id} = useParams();

    //converte o ID para lowercase para ser igual ao do url
    const championId = id.toLowerCase();

    //encontra o index da imagem do campeão
    const index = Object.keys(champion.data).findIndex(key => key.toLowerCase() === championId);

    // obtém o nome do campeão
    const championName = champion.data[Object.keys(champion.data)[index]].name;


    return (
        
        <section className="app__champion-page">
            <div className="app__champion-container">
            <div className="app__champion-banner">
               { /* <div className="app__champion-info">
                        <h1>{championName} guia por <span>Gabriel</span></h1>
                        <p>UPDATED EM ABRIL 25, 2023</p>
                        <BsFillArrowUpCircleFill />
                        <BsFillArrowDownCircleFill />

                        <div className="app__champion-views">
                            <BsEyeFill />
                            <p>30,000 visualizações</p>
                        </div>

                        <div className="app__champion-comments">
                            <BsChatDotsFill />
                            <p>6 comentários</p>
                        </div>
                </div> */}

                <div className="app__champion-img">
                    <img src={championImages[index]} alt={championId} />
                </div>
            </div>
            </div>
            
        </section>
    );
}

export default ChampionPage;