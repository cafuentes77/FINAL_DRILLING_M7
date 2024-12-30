import { dbConfig } from "../config/db.config.js"

import { setupAssociation } from "../utils/db/setupAssociation.js";
import { initModels } from "../utils/db/initModels.js";



export const dbConnect = async() => {
    try {
        await dbConfig.authenticate();
        initModels(dbConfig);
        setupAssociation();
        await dbConfig.sync({alter: true});

        console.log('Logramos conectarnos a Postgre a traves de Sequelize 🚀')
    } catch (error) {
        console.error('No pudimos conectarnos a la DB 🚨', error);
        process.exit(1)
    }
}