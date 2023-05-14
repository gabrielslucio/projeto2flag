import { useState, useEffect } from "react";
import axios from "axios";

const ChampionAatrox = () => {
  const [runes, setRunes] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemResponse, runeResponse] = await Promise.all([
          axios.get("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/item.json"),
          axios.get("https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/runesReforged.json"),
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
            runeResponse.data.filter((tree) => tree.id === 8000)
          )
          .map(({ id, name, icon }) => ({ id, name, icon }));
        setRunes(filteredRunes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <h2>Items</h2>
        {items.map((item) => (
          <div key={item.id}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/${item.image.full}`} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Runes</h2>
        {runes.map((rune) => (
          <div key={rune.id}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} alt={rune.name} />
            <p>{rune.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChampionAatrox;
