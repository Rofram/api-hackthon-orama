import express from 'express';
import cors from 'cors';
<<<<<<< HEAD:src/server.js
=======
import routes from './routes.js';
import dotenv from 'dotenv';

dotenv.config();
>>>>>>> api-paulo:src/index.js

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        'message': 'tudo ok'
    });
});

app.listen(80);
