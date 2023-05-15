import { useState, useEffect } from "react";
import axios from "axios";

import './ChampionAatrox.css';

const ChampionAatrox = () => {
  const [runes, setRunes] = useState([]);
  const [items, setItems] = useState([]);
  const [summonerSpells, setSummonerSpells] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [passive, setPassive] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemResponse, runeResponse] = await Promise.all([
          axios.get("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/item.json"),
          axios.get("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/runesReforged.json"),
          axios.get("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/summoner.json"),
        ]);

        const filteredItems = Object.values(itemResponse.data.data).filter(
          (item) => ["Ravenous Hydra", "Eclipse", "Black Cleaver", "Guardian Angel", "Maw of Malmortius", "Boots of Speed"].includes(item.name)
        );
        setItems(filteredItems);

        const filteredRunes = runeResponse.data
          .flatMap((tree) =>
            tree.id === 8000 || tree.id === 8400 ? tree.slots.flatMap((slot) => slot.runes) : []
          )
          .filter(
            (rune) =>
              ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand", "Second Wind", "Revitalize"].includes(rune.name)
          )
          .concat(
            runeResponse.data.filter((tree) => tree.id === 8000 || tree.id === 8400)
          )
          .map(({ id, name, icon }) => ({ id, name, icon }));
        setRunes(filteredRunes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSummonerSpells = async () => {
        try {
            const summonerSpellsResponse = await axios.get(
                "https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/summoner.json"
            );
            const filteredSummonerSpells = Object.values(summonerSpellsResponse.data.data).filter(
                (summonerSpell) => ["Ignite", "Flash"].includes(summonerSpell.name)
            );
            setSummonerSpells(filteredSummonerSpells);
        } catch (error) {
            console.error(error);
        }
    };
    fetchSummonerSpells();

  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/Aatrox.json"
          );
  
          const championData = response.data.data.Aatrox;
          const championAbilities = Object.values(championData.spells).map((spell) => ({
            name: spell.name,
            image: spell.image.full,
          }));
  
          setAbilities(championAbilities);
          setPassive(championData.passive);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();    
  }, []);

  return (
    <section className="app__aatrox-guide">

        <div className="app__items-container">
            <div className="app__items-header">
                <h1>Items <span>recomendados</span></h1>
            </div>
    <div className="app__items">
        

            {items.map((item) => (
            <div className="items" key={item.id}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${item.image.full}`} alt={item.name} />
                <p>{item.name}</p>
            </div>
            ))}
        </div>
        </div>

        <div className="app__r-s-container">

        </div>
        
        <div className="app__runes">
        <h1>Runes</h1>
        {runes.map((rune) => (
          <div key={rune.id}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} alt={rune.name} />
            <p>{rune.name}</p>
          </div>
        ))}
        </div>
      

        <div className="app__spells">
        <h2>Summoner Spells</h2>
        {summonerSpells.map((spell) => (
            <div key={spell.id}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${spell.image.full}`} alt={spell.name} />
            <p>{spell.name}</p>
            </div>
        ))}
        </div>   

        <div className="app__abilities">
            <h1>Ordem das habilidades</h1>
            {abilities.map((ability) => (
                <div key={ability.name}>
                    <img
                        src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${ability.image}`}
                        alt={ability.name}
                    />
                    <p>{ability.name}</p>
                </div>
            ))}
        </div>

    <div className="app__guide-text">
        <div className="app__intro">
                    <h2>Intro</h2>
                    <p>
                        I'll be using words and phrases that league players would generally know. I will not be covering basics of this game, champions, or naming abilities, assuming you've come here whilst already knowing the basics of league of legends and the champion. 
                        This includes other champion's skills.
                    </p>
        </div>

        <div className="app__bio">
                <h2>Bio</h2>
                    <p>
                        Hello everyone, my name is Veng, also known as God King Aatrox on NA and cunning lad on euw. I've been playing league of legends since late season 1 and started playing officially in season 3. I was a taric otp for 2 or so seasons before aatrox was released, 
                        and by season 4 i dropped every other champion's playrate by about 90% to become an aatrox one trick for nearly 7 seasons now.
                    </p>
        </div>

        <div className="app__why">
                    <h2>Porquê o Aatrox?</h2>
                    <p>Aatrox was always a staple pick after his rework, getting picked in pro play and being nerfed as a result, his mini-rework also made very beneficial changes to both his playstyle and his thematic as a champion.</p>    
                    <span>Pros</span>
                    <p>
                        -First and foremost: resource less.
                        You never have to worry about losing mana, or buying mana items as he doesn't have any, after his rework he doesn't even have any health costs either, so you dont have to worry about slowly bleeding yourself to cast abilities. 
                        -Hard CC on 4 abilities:
                        Being able to knock people up +slow/pull is great both in 1v1's and in teamfights. When paired up with a cc heavy support/jungler/ certain mid laners, you can cc lock enemies and lock them down to the point they won't be able to output their kit in teamfights. This is Knock up also stops them for auto attacking so if you're focusing an ADC you can cut DPS super hard.</p>
                    <span>Cons</span>   
                    <p>
                    -Falls off
                    Unfortunately because aatrox doesnt deal any % health damage, his pure physical kit gets outscaled super hard by both armor and champion levels as the game progresses, to the point you wont be able to kill adc's in a single rotation. (unless you're playing lethality midtrox)

                    -Slow animations
                    Since 80% of aatrox's powerbudget is on his Q, aatrox's damage is all loaded into an ability with a slow wind up. This gives many champions the ability to either dodge your skill shots or generally just out dps you while you wait for your abilities to hit. 
                    </p>
        </div>
    </div>
        
    </section>
  );
};

export default ChampionAatrox;
