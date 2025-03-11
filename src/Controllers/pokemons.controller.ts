import { Request, Response } from "express";
import pokemonsService from "../Services/pokemons.service";
import { Pokemon } from "../schemas/pokemons.schemas";

export default {
    GetPokemons: async (req: Request, res: Response): Promise<void> => {
        try {
            const { query } = req;
            const data: Pokemon[] = await pokemonsService.GetPokemons({
                limit: (isNaN(Number(query['limit'])) || Number(query['limit']) <= 0) ? 10 : Number(query['limit']),
                page: Math.max(Number(query['page']) || 0, 0),
            });
            console.log(data);
            
            res.status(200).json(data);
        } catch (error: unknown) {
            const e: string = error instanceof Error ? error.message : 'Error desconocido';
            console.error(e);
            res.status(404).json({message: 'Hubo un error al obtener los pokemonos.'})
        };
    },
}