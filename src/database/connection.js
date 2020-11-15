import mongoose from 'mongoose';
import { db_conn_string } from '../config/db.js';

mongoose.connect(db_conn_string, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

export default mongoose;