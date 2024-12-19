const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => res.send('Server is running'));

// Start the server only if not in test mode
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Export the app for testing