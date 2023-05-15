import { useState, useEffect } from "react";
import axios from "axios";

const ChampionAatrox = () => {
  const [runes, setRunes] = useState([]);
  const [items, setItems] = useState([]);
  const [summonerSpells, setSummonerSpells] = useState([]);

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

  return (
    <section>
        <div>
        <h1>Runes</h1>
        {runes.map((rune) => (
          <div key={rune.id}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} alt={rune.name} />
            <p>{rune.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Items</h1>
        {items.map((item) => (
          <div key={item.id}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${item.image.full}`} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Summoner Spells</h2>
        {summonerSpells.map((spell) => (
            <div key={spell.id}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/spell/${spell.image.full}`} alt={spell.name} />
            <p>{spell.name}</p>
            </div>
        ))}
        </div>      
    </section>
  );
};

export default ChampionAatrox;
