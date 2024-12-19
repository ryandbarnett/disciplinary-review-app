# disciplinary-review-app
A lightweight app for managing disciplinary reviews at Community College of Aurora.

### Database Seeding

To seed the database with dummy data:

1. Run the following command:
   ```bash
   node backend/db/seed.js

## Query Helper Functions

The query helper functions are located in `backend/db/queryHelpers.js` and are used to interact with the database in a reusable and maintainable way.

### Implemented Helper Functions

#### `createInfraction(studentName, studentSNumber, description)`
- **Description**: Inserts a new disciplinary infraction into the database.
- **Parameters**:
  - `studentName` (string): The name of the student.
  - `studentSNumber` (string): The 8-digit student S number.
  - `description` (string): A description of the infraction.
- **Returns**: A promise that resolves to the ID of the created infraction.
