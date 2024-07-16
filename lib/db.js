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

function getAffectedAreas(ids) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT name FROM areas WHERE area_id IN (?)', [ids], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            let affectedAreas = '';
            // are there more than one affected areas?
            if (results.length > 1) {
                affectedAreas = results.reduce((acc, area) => { return acc + area.name + ', '; }, ''); // only if there is more than one returned
            }
            else {
                affectedAreas = results[0].name;
            }
            return affectedAreas;
        });
    });
}

export async function getAllExercises() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM exercises', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }

            // check affected_area_1 if exists, if so, get name of affected area
            // results[0].affected_area_1 = results[0].affected_area_1 ? getAffectedAreas(results[0].affected_area_1) : null;
            // if there is an affected_area_1 call getAffectedAreas with the id which returns a promise
            // then resolve the promise and set the result to the results[0].affected_area_1
            if (results[0].affected_area_1) {
                getAffectedAreas(results[0].affected_area_1).then((affectedAreas) => {
                    console.log('what this do? ',  affectedAreas)
                    results[0].affected_area_1 = affectedAreas;
                });
            }

            console.log('results?', results);


        });
    });
}