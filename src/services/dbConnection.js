import { dbConfig } from "../config/db.config.js"
import { initBootcamp } from "../models/Bootcamp.model.js";
import { initUser } from "../models/User.model.js";



export const dbConnect = async() => {
    try {
        await dbConfig.authenticate();
        initUser(dbConfig);
        initBootcamp(dbConfig);
        await dbConfig.sync();

        console.log('Logramos conectarnos a Postgre a traves de Sequelize 🚀')
    } catch (error) {
        console.error('No pudimos conectarnos a la DB 🚨', error);
        process.exit(1)
    }
}