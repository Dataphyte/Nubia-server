import mongoose from 'mongoose';
import env from './env.config';
import { connected } from 'process';

const mongoConnect = async () => {
  console.log('Trying mongo connection...');

  mongoose
    .connect(env.MONGO_URL as string, {
      keepAlive: true,
      connectTimeoutMS: 60000,
    })
    .then(() => console.log('Database connected'))
    .catch((error) => console.log(error));
};

export default mongoConnect;
