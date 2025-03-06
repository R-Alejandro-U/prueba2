import server from "./server";
import { Port } from "./config/envs.config";
server.listen(Port, () => console.log(`Servidor escuchando en el puerto ${Port}`));
