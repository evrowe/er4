// Load environment variables into process.env from .env file
require('dotenv').config();

module.exports = {

  // Development Configuration
  // ---------------------------------------------------------------------------

  development: {
    client: 'pg',
    debug: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    }
  }

  // Production Configuration
  // ---------------------------------------------------------------------------
};
