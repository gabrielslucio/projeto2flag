import React from "react";
import { useParams } from "react-router";
import champion from "../../Constants/champion.json";
import championImages from "../../Constants/championImages";

import './ChampionPage.css';

const ChampionPage = () => {
    //useParams para obter o id do URL
    const {id} = useParams();

    //converte o ID para lowercase para ser igual ao do url
    const championId = id.toLowerCase();

    //encontra o index da imagem do campeão
    const index = Object.keys(champion.data).findIndex(key => key.toLowerCase() === championId);

    return (
        <section className="app__champion">
            <div className="app__champion-banner">
                <img src={championImages[index]} alt={championId} />
            </div>
        </section>
    );
}

export default ChampionPage;