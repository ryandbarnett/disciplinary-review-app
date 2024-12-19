const db = require('./db');

db.serialize(() => {
    // Create Users table
    db.run(`
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            role TEXT NOT NULL
        )
    `);

    // Create Infractions table
    db.run(`
        CREATE TABLE IF NOT EXISTS Infractions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_name TEXT NOT NULL,
            student_s_number TEXT NOT NULL,
            description TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create Votes table (optional)
    db.run(`
        CREATE TABLE IF NOT EXISTS Votes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            infraction_id INTEGER NOT NULL,
            voter_id INTEGER NOT NULL,
            vote TEXT NOT NULL,
            FOREIGN KEY (infraction_id) REFERENCES Infractions (id),
            FOREIGN KEY (voter_id) REFERENCES Users (id)
        )
    `);

    console.log('Database schema initialized.');
});
