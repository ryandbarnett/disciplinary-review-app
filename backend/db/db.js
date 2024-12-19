const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Resolve the database path
const dbPath = path.resolve(__dirname, './../../data/database.sqlite');

// Connect to the SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Export the database connection
module.exports = db;