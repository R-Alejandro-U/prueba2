import { Router } from "express";
import routerPokemons from './Pokemons.routes'
const routes: Router = Router();

routes.use('/pokemon', routerPokemons);

export default routes;

