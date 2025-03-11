import axios, { AxiosResponse } from "axios"
import { Pokemon, ResponseApiPokemon } from "../schemas/pokemons.schemas";
export default {
    GetPokemons: async ({page, limit} : {page: number, limit: number}): Promise<Pokemon[]> => {
        const { data }: AxiosResponse<ResponseApiPokemon> = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`);
        return data.results;
    },
}