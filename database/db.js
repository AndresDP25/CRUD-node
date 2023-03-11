import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME,
    DB_PASSWORD, DB_USER,
    DB_PORT
} from "../config.js"
    
//Creamos una instancia de sequelize
//configuración sequelize
//nombre de la base de datos (database_app) - usuario (root) pasword nada.
    const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
        host:DB_HOST,
        port:DB_PORT,
        dialect: 'mysql'
    });

export default db;