import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import rolesRoutes from './routes/roles.routes.js';
import usersRoutes from './routes/users.routes.js';
// Conectar a la base de datos
connectDB();

const app = express();


app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/roles', rolesRoutes);
app.use('/api/users', usersRoutes);

// Ruta principal
app.get("/", (req, res) => {
    const htmlResponse = `
      <html>
        <head>
          <title>Role User API</title>
        </head>
        <body>
          <h1>Role User API</h1>
          <p>Bienvenido a la API de Role User</p>
        </body>
      </html>
    `;
    res.send(htmlResponse);
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
