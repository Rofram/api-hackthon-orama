import mongoose from '../connection';
const Schema = mongoose.Schema;

const RendaFixaSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  rendimento: {
    desc:{
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

module.exports = RendaFixa;