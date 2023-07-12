import { BehaviorSubject, map, combineLatestWith } from "rxjs";

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  selected: boolean;
}

const rawPokemon$ = new BehaviorSubject<Pokemon[]>([]);
const rawPokemonWithPower$ = rawPokemon$.pipe(
  map((pokemonList) =>
    pokemonList.map((pokemon) => ({
      ...pokemon,
      power:
        pokemon.hp +
        pokemon.attack +
        pokemon.defense +
        pokemon.special_attack +
        pokemon.special_defense +
        pokemon.speed,
    })),
  ),
);

export const selected$ = new BehaviorSubject<number[]>([]);
export const rawPokemonWithPowerPiped$ = rawPokemonWithPower$.pipe(
  combineLatestWith(selected$),
  map(([pokemonList, selected]) =>
    pokemonList.map((pokemon) => ({
      ...pokemon,
      selected: selected.includes(pokemon.id),
    })),
  ),
);

fetch("/pokemon-simplified.json")
  .then((res) => res.json())
  .then((data) => {
    const pokemonList = data as unknown as Pokemon[];
    rawPokemon$.next(pokemonList);
  });
