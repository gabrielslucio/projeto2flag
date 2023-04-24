import React, { useState } from "react";
import videos from "../../Constants/videos";
import champion from "../../Constants/champion.json";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";

const Header = () => {

  return (
    <header className="app__header">
      <section className="app__header-container">
        <div className="app__header-vid">
          <video
            type="video/mp4"
            src={videos.backgroundvid}
            autoPlay
            loop
            muted
          />
        </div>

        <div className="app__header-searchbar">
          <form action="" className="app__sform">
            <input
              className="app__input"
              type="text"
              placeholder="Procura por um campeão..."
              required
            />
            <button>
              <AiOutlineSearch className="search-icon" />
            </button>
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;
