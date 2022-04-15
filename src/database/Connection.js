const { Pool } = require('pg');
const { parse } = require('pg-connection-string')

const productionConfig = parse(process.env.DATABASE_URL + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory");

productionConfig.ssl = {
  rejectUnauthorized: false
}

const devConfig = {connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};

// const productionConfig = process.env.DATABASE_URL + "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory";

// module.exports = new Pool({
//   connectionString: process.env.NODE_ENV === "production" ? productionConfig : devConfig,
// });
module.exports = new Pool(process.env.NODE_ENV === "production" ? productionConfig : devConfig);
