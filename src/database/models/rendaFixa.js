import mongoose from '../connection.js';
const Schema = mongoose.Schema;

const RendaFixaSchema = new Schema({
  nome: {
    type: String
  },
  rendimento: {
    desc: {
      type: String
    },
    porcentagemMes: {
      type: Number
    }
  },
  prazo: {
    type: Number
  },
  valorMin: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const RendaFixa = mongoose.model('RendaFixa', RendaFixaSchema);

export default RendaFixa;