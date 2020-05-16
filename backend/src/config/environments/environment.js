require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

export const PORT = process.env.PORT;

export const DATABASE_URL = process.env.DATABASE_URL || null;
