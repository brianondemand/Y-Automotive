/* eslint-disable no-undef */
/** @type { import("drizzle-kit").Config} */
import 'dotenv/config';

export default {
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
