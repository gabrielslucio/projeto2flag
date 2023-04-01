import React from "react";

import champion from "../../Constants/champion.json";

import './ChampionList.css';

const ChampionList = () => {

    return (
        <div className="app__championlist">
             <div className="app__champion-header">
                <h1>Escolhe um campeão para <span>estatísticas</span> e <span>counters</span></h1>
            </div>
            {Object.keys(champion.data).map((id) => (
                <section className="app__championlist-container" key={id}>                   
                    <div className="app__champion-image">
                        <img 
                            src={require(`../../Assets/Ahri_0.jpg`)}
                            alt={`${champion.data[id].name} icon image`}
                        />
                    </div>
                    <div className="app__champion-name">
                        <a href="#">{champion.data[id].name}</a>
                    </div>
                    <div className="app__champion-role">
                        <h2>{champion.data[id].tags[0]}</h2>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ChampionList;