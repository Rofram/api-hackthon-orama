import express from 'express';
import User from '../database/models/user.js';
import RendaFixa from '../database/models/rendaFixa.js';

const userController = express.Router();

userController.get('/myinvests', async (req, res, next) => {
  const rendas = await RendaFixa.find().select('_id');
  const invests = [
  { type: 'acao', id: 'VALE3' },
  { type: 'acao', id: 'B3SA3' },
  { type: 'acao', id: 'PETR4' },
  { type: 'acao', id: 'BBDC4' },
  { type: 'acao', id: 'VVAR3' },
  { type: 'acao', id: 'ITUB4' },
  { type: 'acao', id: 'MGLU3' },
  { type: 'acao', id: 'NTCO3' },
  { type: 'acao', id: 'SUZB3' },
  { type: 'acao', id: 'BBAS3' },
  { type: 'acao', id: 'PETR3' },
  { type: 'acao', id: 'ABEV3' }
  ]

  rendas.forEach(i => invests.push({type: 'renda', id: i._id}));

  res.status(200).json(invests);
});

userController.get('/:email', async (req, res, next) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email })

    if (!user)
      return res.status(400).json({ error: 'User already exists' });

    user.password = undefined;

    return res.status(200).json(user);

  } catch (err) {
    return res.status(400).json({ error: "Couldn't find user" });
  }
});

userController.post('/new', async (req, res, next) => {
  // const {
  //   nome,
  //   cpf,
  //   email,
  //   celular,
  //   password,
  //   dataNasc,
  //   renda,
  //   patrimonio,
  //   objetivo,
  //   quantoInvestRecente,
  //   comoReagiriaQueda,
  //   expRendaFixa,
  //   expPrevidencia,
  //   expRendaVariavel,
  //   expDerivativos,
  //   quaisAtivosPossui,
  //   porcentPatrimonio,
  //   jaInvestiuEm,
  //   pretendeTempo,
  //   experiencia,
  //   formacao,
  //   possuiAcessor,
  //   recebeWhatsapp,
  //   recebeEmail
  // } = req.body;

  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).json({ error: 'User already exists' });

    const user = new User(req.body);
    await user.save();

    user.password = undefined;

    return res.status(200).json(user);

  } catch (err) {
    return res.status(400).json({ error: 'Registration failed' });
  }
});

userController.post('/auth', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).send({ error: 'Registration failed' });

  if (password != user.password)
    return res.status(400).send({ error: 'Invalid password' });

  user.password = undefined;

  res.status(200).json(user);
});

export default userController;