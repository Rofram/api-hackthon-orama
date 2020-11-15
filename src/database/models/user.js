import mongoose from '../connection.js';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nome: String,
  cpf: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  celular: String,
  password: String,
  dataNasc: Date,
  renda: String,
  patrimonio: String,
  objetivo: String,
  quantoInvestRecente: String,
  comoReagiriaQueda: String,
  expRendaFixa: String,
  expPrevidencia: String,
  expRendaVariavel: String,
  expDerivativos: String,
  quaisAtivosPossui: String,
  porcentPatrimonio: String,
  jaInvestiuEm: String,
  pretendeTempo: String,
  experiencia: {
    type: Number,
    min: 1,
    max: 3
  },
  formacao: String,
  possuiAcessor: Boolean,
  recebeWhatsapp: Boolean,
  recebeEmail: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

export default User;