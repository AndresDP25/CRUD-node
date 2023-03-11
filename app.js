import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
//importamos la conexión a DB
import db from "./database/db.js";
//importamos nuestro enrutador 
import blogRoutes from './routes/blogRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//definimos /blogs para todas las rutas
app.use('/blogs', blogRoutes);


try {
    await db.authenticate()
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.listen(PORT, () => {
    console.log(`Server running in https://localhost: ${PORT}`);
})