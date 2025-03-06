/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, Router } from "express";
const routes: Router = Router();

routes.get('/user', (_req: Request, res: Response): any => { 
    res.send('hola mundo');
});

export default routes;

