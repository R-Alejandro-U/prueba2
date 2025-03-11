import router, { Router } from "express";
import pokemonsController from "../Controllers/pokemons.controller";
const routes: Router = router()
routes.get('/', pokemonsController.GetPokemons)
export default routes;