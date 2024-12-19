const db = require('./db');

const createInfraction = (studentName, studentSNumber, description) => {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO Infractions (student_name, student_s_number, description) 
             VALUES (?, ?, ?)`,
            [studentName, studentSNumber, description],
            function (err) {
                if (err) reject(err);
                else resolve(this.lastID); // Return the ID of the inserted record
            }
        );
    });
};

module.exports = {
    createInfraction,
    // Add other helper functions here as needed
};
