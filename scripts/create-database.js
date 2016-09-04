#!/usr/bin/env node

require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  debug: true,
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: 'postgres',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  }
});

const createDatabase = database => {
  return knex.raw(`CREATE DATABASE "${database}"`)
    .then(() => knex.destroy())
    .catch(err => console.log(err.message));
};

if (process.env.NODE_ENV === 'production') {
  return createDatabase('er4').then(() => process.exit());
} else {
  return createDatabase('er4-dev').then(() => process.exit());
}
