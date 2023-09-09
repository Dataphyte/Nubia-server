import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  AWS_REGION: process.env.AWS_REGION,
};
