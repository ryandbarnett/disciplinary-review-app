# disciplinary-review-app
A lightweight app for managing disciplinary reviews at Community College of Aurora.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/disciplinary-review-app.git
cd disciplinary-review-app
```
### Install Dependencies
```bash
npm install
```

### Set Up the Database
```bash
node backend/db/schema.js
```

### Seed the Database with Dummy Data
```bash
node backend/db/seed.js
```

### Start the Server
```bash
node server.js
```
Open a browser and navigate to http://localhost:3000 to access the app.

## Testing Instructions

### Run All Tests

```bash
npm test
```

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

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.