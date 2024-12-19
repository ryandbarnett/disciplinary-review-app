const db = require('./db');

db.serialize(() => {
    // Insert Users
    db.run(`INSERT INTO Users (name, email, role) VALUES ('Admin User', 'admin@example.com', 'admin')`);
    db.run(`INSERT INTO Users (name, email, role) VALUES ('John Smith', 'john.smith@example.com', 'user')`);
    db.run(`INSERT INTO Users (name, email, role) VALUES ('Jane Doe', 'jane.doe@example.com', 'user')`);

    // Insert Infractions
    db.run(`INSERT INTO Infractions (student_name, student_s_number, description) VALUES ('Alice Brown', '12345678', 'Plagiarism detected')`);
    db.run(`INSERT INTO Infractions (student_name, student_s_number, description) VALUES ('Bob Johnson', '87654321', 'Cheating on an exam')`);

    console.log('Database seeding completed.');
});

db.close();