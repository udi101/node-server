import mySql from 'mysql2';

export const mysqlConfig = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'aA5114089',
    database: 'Udi'
}
export const pool = mySql.createPool(mysqlConfig);

