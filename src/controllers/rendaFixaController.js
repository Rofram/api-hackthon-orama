import express from 'express';
import RendaFixa from '../database/models/rendaFixa.js';

const rendaFixaController = express.Router();

rendaFixaController.post('/new', async (req, res, next) => {
  const {
    nome,
    desc,
    porcentagemMes,
    prazo,
    valorMin } = req.body;

  try {
    const rendaFixa = new RendaFixa({
      nome,
      rendimento: {
        desc,
        porcentagemMes
      },
      prazo,
      valorMin
    });

    await rendaFixa.save();

    return res.status(200).json(rendaFixa);

  } catch (err) {
    return res.status(400).json({ error: 'Registration failed' });
  }
});

rendaFixaController.get('/:_id', async (req, res, next) => {
  const { _id } = req.params;

  try {
    const rendaFixa = await RendaFixa.findOne({ _id })

    if (!rendaFixa)
      return res.status(400).json({ error: 'Fund already exists' });


    return res.status(200).json(rendaFixa);

  } catch (err) {
    return res.status(400).json({ error: "Couldn't find fund" });
  }
});

export default rendaFixaController;