
import * as mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host:'ba8bzlgqfsxyqxi9e5gi-mysql.services.clever-cloud.com',
    user: 'u0zoahmlhmkp07b2',
    password: 'TYBLHfRjHbeeThuOX677',
    database: 'ba8bzlgqfsxyqxi9e5gi',
    connectionLimit:10,
    port:3306 
})
 