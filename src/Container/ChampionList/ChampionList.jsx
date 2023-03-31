import React from "react";

import champion from "../../Constants/champion.json";

import {TbBadge} from "react-icons/tb";



import './ChampionList.css';

const ChampionList = () => {

    return (
        <div className="app__championlist">
            {Object.keys(champion.data).map((id) => (
                <section className="app__championlist-container" key={id}>
                    <div className="app__champion-image">
                        <img 
                            src={require(`../../Assets/Aatrox_0.jpg`)}
                            alt={`${champion.data[id].name} icon image`}
                        />
                    </div>
                    <div className="app__champion-name">
                        <a href="#">{champion.data[id].name}</a>
                    </div>
                    <div className="app__champion-role">
                        <h1>{champion.data[id].tags[0]}</h1>
                    </div>
                    <div className="app__champion-tier">
                        <TbBadge className="tier-icon" />
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ChampionList;