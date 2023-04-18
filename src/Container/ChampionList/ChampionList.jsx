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
                    <a href={`#${champion.data[id].name.toLowerCase().replace(/ /g, '-')}`}>
                        <div className="app__champion-image">
                        <img 
                            src={require(`../../Assets/Ahri_0.jpg`)}
                            alt={`${champion.data[id].name} icon image`}
                        />
                        </div>
                    </a>

                    <div className="app__champion-tooltip">
                        <span className="app__champion-name">
                            {champion.data[id].name}
                        </span>
                        <span className="app__champion-role">
                            {champion.data[id].tags[0]}
                        </span>
                    </div>                    
                </section>
            ))}
        </div>
    );
}

export default ChampionList;