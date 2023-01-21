require('dotenv').config();

const { Pool } = require('pg');

const production = process.env.NODE_ENV == 'production';

const connectionstring = `postgresql://${process.env.DB_POSTGRES_USERNAME}:${process.env.DB_POSTGRES_PASSWORD}@${process.env.DB_POSTGRES_HOST}:${process.env.DB_POSTGRES_PORT}/${process.env.DB_POSTGRES_DATABASE}`;

const pool = new Pool({
    connectionString: production ? process.env.DATABASE_URL:connectionstring

});

module.exports = { pool };