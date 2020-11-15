import express from 'express';
import bovespa from 'bovespa';

const bov = bovespa();
const acoesController = express.Router();

acoesController.get("/:name", async (req, res, next) => {
  const { name } = req.params;
  const history = [];

  const dt = new Date();
  dt.setDate(1);
  dt.setMonth(dt.getMonth() - 11);

  for (let i = 0; i < 12; i++) {
    const thisDate = dt.toISOString().split('T')[0]

    await bov(name, thisDate)
      .then(data => {
        data.status = "Success"
        history.push(data);
      })
      .catch(err => {
        history.push({day: thisDate, codneg: name, status: "Fail", err: String(err)});
      });

    dt.setMonth(dt.getMonth() + 1);
  }

  res.status(200).json(history);
});

export default acoesController;