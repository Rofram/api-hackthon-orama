import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        'message': 'tudo ok'
    });
});

app.listen(80);
