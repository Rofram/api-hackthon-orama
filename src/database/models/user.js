import mongoose from '../connection';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: String,
  dataNasc: {
    type: Date,
    require: true
  },
  pretendInvest: {
    type: Number,
    min: 0,
    require: true
  },
  experiencia: {
    type: Number,
    min: 1,
    max: 3,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;