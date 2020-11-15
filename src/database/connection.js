import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CONN_STRING, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

export default mongoose;