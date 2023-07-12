import { selected$, rawPokemonWithPowerPiped$, Pokemon } from "./store";
import { useEffect, useState, useMemo } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const sub = rawPokemonWithPowerPiped$.subscribe(setPokemonList);
    return () => sub.unsubscribe();
  }, []);

  const filteredPokemoList = useMemo(() => {
    return pokemonList.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [pokemonList, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredPokemoList.map((p) => (
          <div key={p.id}>
            <input
              type="checkbox"
              checked={selected$.value.includes(p.id)}
              onChange={() => {
                if (p.selected) {
                  selected$.next(selected$.value.filter((id) => id !== p.id));
                } else {
                  [selected$.next([...selected$.value, p.id])];
                }
              }}
            ></input>
            <strong>{p.name}</strong> - {p.power}
          </div>
        ))}
      </div>
    </div>
  );
};

export function RxjsDemo() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Search />
    </div>
  );
}
