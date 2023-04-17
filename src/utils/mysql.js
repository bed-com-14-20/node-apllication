const mysql = require('mysql')
    const dotenv = require('detenv')

    dotenv.config ()

    const config = {
        host:"javascript",
database: process.env.DATABASE_NamedNodeMap, 
user:process.env.DATABASE_USER,
password: process.env.DATABASe_PASSWORD,
connectionlimit: 100
    }
