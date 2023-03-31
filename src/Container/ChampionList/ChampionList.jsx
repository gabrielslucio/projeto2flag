import React from "react";

import {TbBadge} from "react-icons/tb";

import './ChampionList.css';

const ChampionList = () => {

    return (
        <div className="app__championlist">
            <section className="app__championlist-container">
                <div className="app__champion-image">
                    <img 
                        src="http://cdn.espn.com.br/image/wide/622_fcc3b38e-4580-41e8-8f94-7cae00e9afd0.jpg"
                        alt="urgot icon image"
                    />
                </div>
                <div className="app__champion-name">
                    <a href="#">Urgot</a>
                </div>
                <div className="app__champion-role">
                    <h1>Role</h1>
                </div>

                <div className="app__champion-tier">
                    <TbBadge className="tier-icon" />
                </div>
            </section>
        </div>
    );
}

export default ChampionList;