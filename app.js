import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from './routes/blogRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);


try {
    await db.authenticate()
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.listen(8000, () => {
    console.log('Server running in https://localhost:8000');
})