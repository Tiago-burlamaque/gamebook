import mysql2 from 'mysql2/promise'
import 'dotenv/config'

const db = mysql2.createPool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD
});

export default db;



