// this needs to connect to a local db called 'fitness' with password 'password12345'
// and export the connection
import mysql from 'mysql';

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'fitness'
});
try {
    console.log('Connecting to database');
    connection.connect();    
} catch (e) {
    console.log('Error connecting to database');
    console.log(e);
}

export async function getAllExercises() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM exercises', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}