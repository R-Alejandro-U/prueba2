import 'dotenv/config'
const data: NodeJS.ProcessEnv = process.env
export const Port: number = data["PORT"] ? Number(data["PORT"]) : 3000;