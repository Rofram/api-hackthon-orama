import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        'message': 'tudo ok'
    });
});

app.use(routes);

app.listen(port, () => {
    console.log("App running on port " + port);
});
