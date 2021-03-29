import 'dotenv/config';

export default {
  app: {
    port: Number(process.env.APP_PORT ?? '3000'),
  },
  mongo: {
    url: process.env.MONGO_URL || '',
  },
};
