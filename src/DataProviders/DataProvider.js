// import { HostApiName } from "../Resource/ApiResource";
import { Handle } from "../ErrorHandler/Error";
const PokeNumber = 80;

export class ApiProxy {
  async GetPokeData() {
    const pokemons = [];
    for (let i = 1; i <= PokeNumber; i++) {
      const HostApiName = `https://pokeapi.co/api/v2/pokemon/${i}`;
      await fetch(HostApiName)
        .then((res) => res.json())
        .then((data) => {
          const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites["front_default"],
            type: data.types.map((type) => type.type.name).join(", "),
            height: data.height,
            weight: data.weight,
            stats_name: data.stats.map((stat) => stat.stat.name),
            stats_data: data.stats.map((stat) => stat.base_stat),
          };
          pokemons.push(pokemon);
        })
        .catch((error) => Handle(error));
    }
    return pokemons;
  }
}
