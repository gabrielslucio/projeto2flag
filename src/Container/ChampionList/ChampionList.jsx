import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import champion from "../../Constants/champion.json";
import championImages from "../../Constants/championImages";
import "./ChampionList.css";

const ChampionList = () => {

  return (
    <div className="app__championlist">
      <div className="app__champion-header">
        <h1>
          Escolhe um campeão para <span>guias</span> e{" "}
          <span>estatísticas</span>
        </h1>
      </div>
      {Object.keys(champion.data).map((id, index) => (
        <NavLink
          className="app__championlist-container"
          key={id}
          to={`/campeao/${id.toLowerCase()}`}
          
        >
          <div className="app__champion-image">
            <img
              src={championImages[index]}
              alt={`${champion.data[id].name} icon image`}
            />
          </div>
          <div className="app__champion-tooltip">
            <span className="app__champion-name">{champion.data[id].name}</span>
            <span className="app__champion-role">{champion.data[id].tags[0]}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ChampionList;
