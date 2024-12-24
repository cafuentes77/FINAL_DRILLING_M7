import { dbConnect } from "./dbConnection.js";

export const serverInit = async (app, PORT) => {
    try {
        console.log('Verificando conexión a la base de datos');
        await dbConnect()


        app.listen (PORT, () => {
            console.log(`Server is running on port ${PORT} ⚡🎆`);
        })
    } catch (error) {
        console.error('Error al iniciaizar el servidor:', error);
    }
}